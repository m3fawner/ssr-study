import {
  Text, Flex, Tooltip, Icon, Table, Thead, Tbody, Tr, Th, Td, Box, ResponsiveValue,
} from '@chakra-ui/react';
import { Property } from 'csstype';
import { useMemo } from 'react';
import QuestionIcon from '../../svgs/question.svg';
import useForm from '../../../hooks/useForm';
import yup from '../../../util/yup';
import { timeToFutureValue } from '../../../util/futureValue';
import { getDollar, getFloatToPrecision } from '../../../util/formatters';
import RHFInput from '../../RHF/Input';
import { DataRow, ComparisonChartProps } from './types';
import DynamicallyImported from '../../utility/DynamicallyImported';

const hiddenOnMobileCell = ['none', null, null, 'table-cell'];
const getColorForValue = (value: number, compareTo: number) => {
  if (value === compareTo) {
    return 'gray.800';
  } if (value > compareTo) {
    return 'green.800';
  }
  return 'red.800';
};

type ComparisonTableProps = {
  dataRows: DataRow[],
  sharePrice: number,
  grantAmount: number
}
const ComparisonTableView = ({
  dataRows, sharePrice, grantAmount, ...props
}: ComparisonTableProps) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>Share price</Th>
        <Th>RSU value</Th>
        <Th>
          <Tooltip label="Options value is calculated by taking the options to RSU ratio, then multiplying it by the difference between market value and grant price. This is accounting for the value of the grant under the presumption of an 'exercise and sell' mechanic">
            <Box>
              Options value
              <Icon ml={2} as={QuestionIcon} />
            </Box>
          </Tooltip>
        </Th>
        <Th display={hiddenOnMobileCell}>Difference</Th>
      </Tr>
    </Thead>
    <Tbody>
      {dataRows.map(({
        rowPrice, optionValue, rsuValue, difference,
      }) => (
        <Tr key={rowPrice}>
          <Td><Text as={rowPrice === sharePrice ? 'strong' : 'span'}>{getDollar(rowPrice)}</Text></Td>
          <Td color={getColorForValue(rsuValue, optionValue)}>{getDollar(rsuValue * grantAmount)}</Td>
          <Td color={getColorForValue(optionValue, rsuValue)}>{getDollar(optionValue * grantAmount)}</Td>
          <Td display={hiddenOnMobileCell}>
            {getDollar(difference)}
            {difference !== 0 && (
            <Text as="span">
              {' '}
              in favor of
              {' '}
              <Text as="strong">{rsuValue > optionValue ? 'RSUs' : 'Options'}</Text>
            </Text>
            )}
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const PERCENTAGE_INTERVAL = 5;
const RANGE = 50;
const rsuVOptionsSchema = yup.object({
  sharePrice: yup.number().min(0).required().label('Share price'),
  grantPrice: yup.number().min(0).required().label('Grant price'),
  optionRatio: yup.number().min(1).required().label('Option ratio'),
  grantAmount: yup.number().min(1).required().label('Grant amount'),
});
const chartFlex: ResponsiveValue<Property.FlexDirection> = ['column', null, null, 'row'];
const fullOnMobile = ['100%', null, '50%', '100%'];
const toTwoDecimalFloat = (value: number) => parseFloat(getFloatToPrecision(value, 2));

type RSUvOptionsProps = {
  initialSharePrice: number
}
const RSUvOptions = ({ initialSharePrice = 135 }: RSUvOptionsProps) => {
  const { getInputProps, watch } = useForm({
    defaultValues: {
      sharePrice: initialSharePrice,
      grantPrice: initialSharePrice,
      optionRatio: 3,
      grantAmount: 1,
    },
  }, rsuVOptionsSchema);
  const {
    sharePrice, optionRatio, grantPrice, grantAmount,
  } = watch();
  const dataRows = useMemo(
    () => new Array(RANGE / PERCENTAGE_INTERVAL)
      .fill(null, 0, RANGE / PERCENTAGE_INTERVAL)
      .reduce((result, _, i) => [
      // exclude one of the midpoints
        (i !== 0 && (1 - (i * (PERCENTAGE_INTERVAL / 100))) * sharePrice),
        ...result,
        (1 + (i * (PERCENTAGE_INTERVAL / 100))) * sharePrice,
      ], [])
      .filter(Boolean)
      .map((rowPrice: number) => {
        const rsuValue = toTwoDecimalFloat(rowPrice);
        const optionValue = toTwoDecimalFloat(
          optionRatio
        * (Math.max(grantPrice, rowPrice) - grantPrice),
        );
        const difference = (Math.max(rsuValue, optionValue) - Math.min(rsuValue, optionValue)) * grantAmount;
        return ({
          rowPrice: toTwoDecimalFloat(rowPrice),
          rsuValue,
          optionValue,
          difference,
        });
      }),
    [sharePrice, optionRatio, grantPrice, grantAmount],
  );
  const breakEvenPrice = useMemo(
    () => (1 + (1 / (optionRatio - 1))) * grantPrice,
    [grantPrice, optionRatio],
  );
  return (
    <>
      <Flex flexDir={chartFlex}>
        <Flex flexWrap="wrap" pr="5">
          <RHFInput flexBasis={fullOnMobile} pr="2" left="$" {...getInputProps('sharePrice', { valueAsNumber: true })} label="Share price" />
          <RHFInput flexBasis={fullOnMobile} left="$" {...getInputProps('grantPrice', { valueAsNumber: true })} label="Grant (strike) price" />
          <RHFInput flexBasis={fullOnMobile} pr="2" right="per RSU" {...getInputProps('optionRatio', { valueAsNumber: true })} label="Options per RSU" />
          <RHFInput flexBasis={fullOnMobile} right="RSUs per vest period" {...getInputProps('grantAmount', { valueAsNumber: true })} label="RSUs granted" />
        </Flex>
        <DynamicallyImported<ComparisonChartProps> loader={() => import('./ComparisonChart')} componentProps={{ dataRows }} />
      </Flex>
      {breakEvenPrice && (
        <>
          <Text display="inline-block" mt="2">
            The current breakeven price is
            {' '}
            <Text as="strong">{getDollar(breakEvenPrice)}</Text>
            , meaning the share price must exceed that amount for options to be worth more than RSUs.
          </Text>
          <Text>
            Using a standard 10% rate of return, it would take
            {' '}
            <Text as="strong">{getFloatToPrecision(timeToFutureValue(breakEvenPrice, sharePrice, 0.1), 2)}</Text>
            {' '}
            years to reach that point.
          </Text>
        </>
      )}
      <ComparisonTableView dataRows={dataRows} sharePrice={sharePrice} grantAmount={grantAmount} key={[sharePrice, optionRatio, grantPrice, grantAmount].join('')} />
    </>
  );
};
export default RSUvOptions;

import {
  Text, Flex, Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import useForm from '../../hooks/useForm';
import yup from '../../util/yup';
import { timeToFutureValue } from '../../util/futureValue';
import { getDollar, getFloatToPrecision } from '../../util/formatters';
import RHFInput from '../RHFInput';
import { dataRowsPropTypes } from './propTypes';
import DynamicallyImported from '../DynamicallyImported';

const hiddenOnMobileCell = ['none',,, 'table-cell'];
const getColorForValue = (value, compareTo) => {
  if (value === compareTo) {
    return 'gray.800';
  } if (value > compareTo) {
    return 'green.800';
  }
  return 'red.800';
};
const ComparisonTableView = ({
  dataRows, sharePrice, grantAmount, ...props
}) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>Share price</Th>
        <Th>RSU value</Th>
        <Th>Options value</Th>
        <Th d={hiddenOnMobileCell}>Difference</Th>
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
          <Td d={hiddenOnMobileCell}>
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
ComparisonTableView.propTypes = {
  dataRows: dataRowsPropTypes.isRequired,
  sharePrice: PropTypes.number.isRequired,
  grantAmount: PropTypes.number.isRequired,
};

const PERCENTAGE_INTERVAL = 5;
const RANGE = 50;
const rsuVOptionsSchema = yup.object({
  sharePrice: yup.number().min(0).required().label('Share price'),
  grantPrice: yup.number().min(0).required().label('Grant price'),
  optionRatio: yup.number().min(1).required().label('Option ratio'),
  grantAmount: yup.number().min(1).required().label('Grant amount'),
});
const chartFlex = ['column',,, 'row'];
const fullOnMobile = ['100%', , '50%', '100%'];
const toTwoDecimalFloat = (value) => parseFloat(getFloatToPrecision(value, 2));
const RSUvOptions = ({ initialSharePrice }) => {
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
      .map((rowPrice) => {
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
        <DynamicallyImported loader={() => import('./ComparisonChart')} dataRows={dataRows} />
      </Flex>
      {breakEvenPrice && (
        <>
          <Text d="inline-block" mt="2">
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
RSUvOptions.propTypes = {
  initialSharePrice: PropTypes.number,
};
RSUvOptions.defaultProps = {
  initialSharePrice: 135,
};
export default RSUvOptions;
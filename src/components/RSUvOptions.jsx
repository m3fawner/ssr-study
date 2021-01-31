import {
  Text, Flex, Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import useForm from '../hooks/useForm';
import yup from '../util/yup';
import { getDollar } from '../util/formatters';
import RHFInput from './RHFInput';

const PERCENTAGE_INTERVAL = 5;
const RANGE = 50;
const rsuVOptionsSchema = yup.object({
  sharePrice: yup.number().min(0).required(),
  optionsPerRSU: yup.number().min(1).required(),
});
const getColorForValue = (value, compareTo) => {
  if (value === compareTo) {
    return 'gray.800';
  } if (value > compareTo) {
    return 'green.400';
  }
  return 'red.400';
};
const RSUvOptions = ({ initialSharePrice }) => {
  const { getInputProps, watch, handleSubmit } = useForm({
    defaultValues: {
      sharePrice: initialSharePrice,
      grantPrice: initialSharePrice,
      optionRatio: 5,
      grantAmount: 1,
    },
  }, rsuVOptionsSchema);
  const {
    sharePrice, optionRatio, grantPrice, grantAmount,
  } = watch();
  const rows = useMemo(() => new Array(RANGE / PERCENTAGE_INTERVAL)
    .fill(null, 0, RANGE / PERCENTAGE_INTERVAL)
    .reduce((result, _, i) => [
      // exclude one of the midpoints
      (i !== 0 && (1 - (i * (PERCENTAGE_INTERVAL / 100))) * sharePrice),
      ...result,
      (1 + (i * (PERCENTAGE_INTERVAL / 100))) * sharePrice,
    ], [])
    .filter(Boolean)
    .map((rowPrice) => {
      const rsuValue = rowPrice * grantAmount;
      const optionValue = optionRatio
        * (Math.max(grantPrice, rowPrice) - grantPrice)
        * grantAmount;
      const difference = Math.max(rsuValue, optionValue) - Math.min(rsuValue, optionValue);
      return ({
        rowPrice,
        rsuValue,
        optionValue,
        difference,
      });
    }),
  [sharePrice, optionRatio, grantPrice, grantAmount]);
  const breakEvenPrice = useMemo(
    () => (1 + (1 / (optionRatio - 1))) * grantPrice,
    [grantPrice, optionRatio],
  );
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Flex>
        <RHFInput mr="2" left="$" {...getInputProps('sharePrice', { valueAsNumber: true })} label="Share price" />
        <RHFInput left="$" {...getInputProps('grantPrice', { valueAsNumber: true })} label="Grant (strike) price" />
      </Flex>
      <Flex>
        <RHFInput mr="2" right="per RSU" {...getInputProps('optionRatio', { valueAsNumber: true })} label="Options per RSU" />
        <RHFInput right="RSUs per vest period" {...getInputProps('grantAmount', { valueAsNumber: true })} label="RSUs granted" />
      </Flex>
      {breakEvenPrice && (
      <Text as="span">
        The current breakeven price is
        {' '}
        <Text as="strong">{getDollar(breakEvenPrice)}</Text>
        , meaning the share price must exceed that amount for options to be worth more than RSUs.
      </Text>
      )}
      {!!grantPrice && !!sharePrice && !!optionRatio && (
        <Table mt="5">
          <Thead>
            <Tr>
              <Th>Share price</Th>
              <Th>RSU value</Th>
              <Th>Options value</Th>
              <Th>Difference</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map(({
              rowPrice, optionValue, rsuValue, difference,
            }) => (
              <Tr key={`${rowPrice} - ${optionValue} - ${grantAmount}`}>
                <Td><Text as={rowPrice === sharePrice ? 'strong' : 'span'}>{getDollar(rowPrice)}</Text></Td>
                <Td color={getColorForValue(rsuValue, optionValue)}>{getDollar(rsuValue)}</Td>
                <Td color={getColorForValue(optionValue, rsuValue)}>{getDollar(optionValue)}</Td>
                <Td>
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
      )}
    </form>
  );
};
RSUvOptions.propTypes = {
  initialSharePrice: PropTypes.number,
};
RSUvOptions.defaultProps = {
  initialSharePrice: 135,
};
export default RSUvOptions;

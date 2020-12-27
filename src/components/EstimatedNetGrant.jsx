import {
  Input,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Text,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Divider,
} from '@chakra-ui/react';
import {
  useCallback, useState, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import useAlphaVantageAPI from '../hooks/useAlphaVantageAPI';

const schema = yup.object({
  symbol: yup.string().required(),
  stateTax: yup.number().min(0).max(100),
  ssEarnings: yup.number().min(0),
  sharesGranted: yup.number().min(0),
});

const SS_LIMIT = 142800;
const SS_TAX = 0.062;
const SUPPLEMENTAL_INCOME_RATE = 0.22;
const MEDICARE_RATE = 0.0145;
const getDollar = (amount) => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const getPercent = (amount) => (amount * 100).toLocaleString('en-US');
const getSSTaxableProceeds = (ssEarnings, proceeds) => {
  if (ssEarnings > SS_LIMIT) {
    return 0;
  }
  if (ssEarnings + proceeds > SS_LIMIT) {
    return SS_LIMIT - ssEarnings;
  }
  return proceeds;
};

const LineItem = ({ label, amount }) => (
  <Flex justifyContent="space-between">
    <Text as="strong">{label}</Text>
    <Text ml="1" color={amount > 0 ? 'green.400' : 'red.400'}>{getDollar(amount)}</Text>
  </Flex>
);
LineItem.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

const EstimatedNetGrant = () => {
  const {
    register, watch, getValues,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      stateTax: 0,
      sharesGranted: 0,
      ssEarnings: 0,
    },
    resolver: yupResolver(schema),
  });
  const { getPrice } = useAlphaVantageAPI();
  const [currentPrice, setCurrentPrice] = useState(null);
  const watched = watch();
  const {
    sharesGranted,
    grantProceeds,
    ssEarnings,
    stateTaxes,
    federalTaxes,
    medicareTaxes,
    ssTaxes,
    netProceeds,
  } = useMemo(() => {
    const casted = schema.cast(watched);
    const proceeds = (casted.sharesGranted * currentPrice) || 0;
    const ssTaxableProceeds = getSSTaxableProceeds(casted.ssEarnings, proceeds);
    const state = (casted.stateTax / 100) * proceeds || 0;
    const federal = SUPPLEMENTAL_INCOME_RATE * proceeds || 0;
    const medicare = MEDICARE_RATE * proceeds || 0;
    const ss = ssTaxableProceeds * SS_TAX || 0;
    return {
      ...casted,
      grantProceeds: proceeds,
      stateTaxes: state,
      federalTaxes: federal,
      medicareTaxes: medicare,
      ssTaxes: ss,
      netProceeds: proceeds - state - federal - medicare - ss,
    };
  }, [watched, currentPrice]);
  const updatePrice = useCallback(async () => {
    setCurrentPrice(await getPrice(getValues('symbol')));
  }, [getValues]);
  const stateTaxesApplicable = stateTaxes !== 0 && stateTaxes;
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="symbol">Ticker symbol</FormLabel>
        <Flex>
          <Input ref={register} name="symbol" />
          <Button ml="2" onClick={updatePrice}>Get data</Button>
        </Flex>
      </FormControl>
      {currentPrice && (
      <>
        <Flex mt="2">
          <Text>
            Current price of
            {' '}
            {getValues('symbol')}
            :
            {' '}
          </Text>
          <Text ml="2" as="strong">
            {getDollar(currentPrice)}
          </Text>
        </Flex>
        <FormControl mt="4">
          <FormLabel htmlFor="sharesGranted">
            Shares granted
          </FormLabel>
          <InputGroup>
            <Input ref={register} name="sharesGranted" />
            <InputRightAddon>shares</InputRightAddon>
          </InputGroup>
        </FormControl>
        {sharesGranted !== 0 && sharesGranted && (
        <Flex>
          <Text>Gross proceeds: </Text>
          <Text as="strong" ml="2">{getDollar(grantProceeds)}</Text>
        </Flex>
        )}
        <FormControl mt="4">
          <FormLabel htmlFor="ssEarnings">
            YTD earnings subject to Social Security
          </FormLabel>
          <InputGroup>
            <InputLeftAddon>$</InputLeftAddon>
            <Input ref={register} name="ssEarnings" />
          </InputGroup>
        </FormControl>
        {grantProceeds && ssTaxes === 0
          ? (
            <Text>
              Congratulations, you don&apos;t have to pay social security on this grant!
            </Text>
          )
          : (
            <Text>
              {(ssEarnings + grantProceeds) < SS_LIMIT
                ? 'You are subject to 6.2% SS taxes, amounting to '
                : 'You are subject to a partial Social Security withholding of '}
              <Text as="strong">{getDollar(ssTaxes)}</Text>
            </Text>
          )}
        <FormControl mt="4">
          <FormLabel htmlFor="stateTax">
            Top marginal state tax rate
          </FormLabel>
          <InputGroup>
            <Input ref={register} name="stateTax" />
            <InputRightAddon>%</InputRightAddon>
          </InputGroup>
        </FormControl>
        {stateTaxesApplicable && (
        <Flex>
          <Text>Your state tax liability is</Text>
          <Text as="strong" ml="1">{getDollar(stateTaxes)}</Text>
        </Flex>
        )}
        {grantProceeds !== 0 && grantProceeds && (
          <>
            <Flex mt="4">
              <Text>
                Your federal withholdings are at supplemental rate of
                {' '}
                {getPercent(SUPPLEMENTAL_INCOME_RATE)}
                %, or
                {' '}
              </Text>
              <Text as="strong" ml="1">{getDollar(federalTaxes)}</Text>
            </Flex>
            <Flex mt="4">
              <Text>
                Additionally, you will owe medicare taxes, at
                {' '}
                {getPercent(MEDICARE_RATE)}
                % or,
                {' '}
              </Text>
              <Text as="strong" ml="1">{getDollar(medicareTaxes)}</Text>
            </Flex>
            <Flex flexDirection="column" mt="8">
              <Text fontSize="4xl" align="center" mb="2">Net proceeds calculation</Text>
              <LineItem label="Gross proceeds" amount={grantProceeds} />
              <LineItem label="Federal income taxes" amount={-federalTaxes} />
              {stateTaxesApplicable && <LineItem label="State taxes" amount={-stateTaxes} />}
              {ssTaxes > 0 && <LineItem label="Social Security" amount={-ssTaxes} />}
              <LineItem label="Medicare taxes" amount={-medicareTaxes} />
              <Divider mt="2" size="4" />
              <LineItem label="Net proceeds" amount={netProceeds} />
            </Flex>
          </>
        )}
      </>
      )}
    </form>
  );
};

export default EstimatedNetGrant;

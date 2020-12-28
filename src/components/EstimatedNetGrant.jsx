import {
  SimpleGrid,
  Box,
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
  Container,
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
const HelpItem = ({ label, body }) => (
  <Container py="4" borderWidth="1px" borderColor="gray.400" borderStyle="solid" bg="white" borderRadius="md">
    <Text fontSize="lg" as="strong">{label}</Text>
    <Text>
      {body}
    </Text>
  </Container>
);
HelpItem.propTypes = {
  label: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
const HelpItems = () => (
  <SimpleGrid columns="3" bg="gray.100" spacing="6" p="6" ml="-4" mr="-4" mt="4">
    <HelpItem label="Gross proceeds" body="Gross proceeds is the total sum of the sale, and amounts to the share price times the number of shares" />
    <HelpItem label="Federal income taxes" body="Federal income taxes are withheld at supplemental income rates, or 22%. You will need to appropriately account for the difference in supplemental & marginal rates!" />
    <HelpItem label="State taxes" body="State taxes are income taxes applied to earnings. This will be dependent upon the appropriate state's tax regulation." />
    <HelpItem label="Medicare taxes" body="Medicare taxes are withheld at 1.45% for the employee, and another 1.45% paid by the employer." />
    <HelpItem label="Social Security taxes" body="Social Security taxes, like medicare, are an employee/employer tax. The employee pays 6.2%, on up to $142,800 of earnings. After that, social security does not apply." />
    <HelpItem label="Net proceeds" body="The amount of proceeds that will be credited to your account after all sales & and taxes are withheld." />
  </SimpleGrid>
);
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
    sharesToCover,
  } = useMemo(() => {
    const casted = schema.cast(watched);
    const proceeds = (casted.sharesGranted * currentPrice) || 0;
    const ssTaxableProceeds = getSSTaxableProceeds(casted.ssEarnings, proceeds);
    const state = (casted.stateTax / 100) * proceeds || 0;
    const federal = SUPPLEMENTAL_INCOME_RATE * proceeds || 0;
    const medicare = MEDICARE_RATE * proceeds || 0;
    const ss = ssTaxableProceeds * SS_TAX || 0;
    const totalTaxes = state + federal + medicare + ss;
    return {
      ...casted,
      grantProceeds: proceeds,
      stateTaxes: state,
      federalTaxes: federal,
      medicareTaxes: medicare,
      ssTaxes: ss,
      netProceeds: proceeds - totalTaxes,
      sharesToCover: Math.ceil(totalTaxes / currentPrice),
    };
  }, [watched, currentPrice]);
  const updatePrice = useCallback(async () => {
    setCurrentPrice(await getPrice(getValues('symbol')));
  }, [getValues]);
  const stateTaxesApplicable = stateTaxes !== 0 && stateTaxes;
  return (
    <Box as="form" w="100%">
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
            <Flex mt="4">
              <Text>
                Your brokerage will sell
                {' '}
                {sharesToCover}
                {' '}
                shares to cover the taxes, if you have automatic withholding selected.
              </Text>
            </Flex>
          </>
        )}
        <HelpItems />
      </>
      )}
    </Box>
  );
};

export default EstimatedNetGrant;

import {
  Heading, Text, Box, Button, Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useCallback, useState, useMemo } from 'react';
import useForm from '../hooks/useForm';
import yup from '../util/yup';
import { getDollar } from '../util/formatters';
import RHFInput from './RHFInput';
import RHFCheckbox from './RHFCheckbox';

// TODO: Adjust for over 55 (add input for swapping)
const TOTAL_401K_LIMIT_OVER_55 = 64500;
const TOTAL_401K_LIMIT = 58000;
const BASE_401K_LIMIT_OVER_55 = 26000;
const BASE_401K_LIMIT = 19500;
const TOTAL_401K_LIMIT_IN_DOLLARS = getDollar(TOTAL_401K_LIMIT, true);
const TOTAL_401K_LIMIT_OVER_55_IN_DOLLARS = getDollar(TOTAL_401K_LIMIT_OVER_55, true);
const BASE_401K_LIMIT_IN_DOLLARS = getDollar(BASE_401K_LIMIT, true);
const BASE_401K_LIMIT_OVER_55_IN_DOLLARS = getDollar(BASE_401K_LIMIT_OVER_55, true);
const Intro = (
  <>
    <Heading size="sm">Motivation</Heading>
    <Text>
      &nbsp;&nbsp;The motivation for a megabackdoor Roth is to take advantage of the full
      401k limit defined by the IRS. It is comprised of the employee contribution limit
      of
      {' '}
      {BASE_401K_LIMIT_IN_DOLLARS}
      {' '}
      limit, which can be Traditional (Pre-tax) or Roth. This is the limit most people are
      familiar with. If you are over the age of 55, this limit is
      {' '}
      {BASE_401K_LIMIT_OVER_55_IN_DOLLARS}
      .
    </Text>
    <Text>
      &nbsp;&nbsp;However, the total 401k limit is actually
      {' '}
      {TOTAL_401K_LIMIT_IN_DOLLARS}
      , or
      {' '}
      {TOTAL_401K_LIMIT_OVER_55_IN_DOLLARS}
      {' '}
      if over 55!
      The additional difference is made up by your employer match (if you have one!)
      and &quot;after-tax&quot; 401k contributions. After-tax is what we will be
      leveraging to perform megabackdoor Roth conversions. It is a way of unlocking the full limit.
    </Text>
    <Text>
      &nbsp;&nbsp;After-tax contributions are like Roth contributions in that you pay income taxes
      on the contribution amount at the time of contribution. However, unlike Roth, there is no tax
      advantage to after-tax contributions without performing a
      {' '}
      <Text as="em">conversion.</Text>
      {' '}
      A conversion is a change of the tax treatment of contributions.
      In the case of a megabackdoor Roth, that conversion is from after-tax treatment, to Roth.
      {' '}
      <Text as="strong">This is a taxable event!</Text>
    </Text>
    <Text>
      &nbsp;&nbsp;Thankfully, you already paid taxes on the contribution amount, so the taxable
      event is generally not impactful. The only taxable income on the conversion that occurs is
      on the gains that may have occurred in the time that it was classified as after-tax. Many
      401k providers have made these conversions as close to instantaneous as possible, meaning
      each conversion is not taxable.
    </Text>
    <Text>
      &nbsp;&nbsp;After a conversion has taken place, the converted principal is now entirely
      classified as Roth, meaning you&apos;ll never pay a dime in income taxes on that balance
      again!*
    </Text>
    <Text as="em" fontSize="sm">* under current tax law.</Text>
    <Text mt="4">
      <Text as="strong">Note:</Text>
      {' '}
      Some employers artificially limit after
      tax maximums. For instance, my employer limits it to the match times the IRS 401k compensation
      limit ($290,000).
    </Text>
  </>
);
const afterTaxSpaceSchema = yup.object({
  over55: yup.bool(),
  flatMatch: yup.bool(),
  flatMatchAmount: yup.number().min(0).label('Flat match amount'),
  salary: yup.number().min(0).label('Salary'),
  matchPercent: yup.number().min(0).label('Match percent'),
  employeeContributions: yup.number().min(0).label('Employee contributions').when('over55', {
    is: true,
    then: (schema) => schema.max(BASE_401K_LIMIT_OVER_55),
    otherwise: (schema) => schema.max(BASE_401K_LIMIT),
  }),
});
const AfterTaxSpaceCalculator = ({ onSubmit }) => {
  const [afterTaxLimit, setAfterTaxLimit] = useState(null);
  const { getInputProps, watch, handleSubmit } = useForm({
    defaultValues: {
      flatMatch: false,
      matchPercent: 4,
      salary: 100000,
      employeeContributions: BASE_401K_LIMIT,
      over55: false,
    },
  }, afterTaxSpaceSchema);
  const {
    flatMatch, employeeContributions, matchPercent, salary, flatMatchAmount, over55,
  } = watch();
  const max401k = useMemo(() => (over55 ? TOTAL_401K_LIMIT_OVER_55 : TOTAL_401K_LIMIT), [over55]);
  const maxEmployee401k = useMemo(
    () => (over55 ? BASE_401K_LIMIT_OVER_55 : BASE_401K_LIMIT),
    [over55],
  );
  const calculatedAfterTaxMax = handleSubmit(() => {
    const match = flatMatch ? flatMatchAmount : (salary * (matchPercent / 100));
    const limit = max401k - match - employeeContributions;
    setAfterTaxLimit(limit);
    onSubmit({
      limit,
      employeeContributions,
    });
  });
  return (
    <>
      <Box as="form" pb="4" onSubmit={calculatedAfterTaxMax}>
        <RHFCheckbox {...getInputProps('flatMatch')} label="Flat match (not percentage based)" />
        <RHFCheckbox {...getInputProps('over55')} label="55 or older" />
        {flatMatch
          ? <RHFInput {...getInputProps('flatMatchAmount')} label="Flat match amount" left="$" right="/yr" />
          : (
            <Flex>
              <RHFInput {...getInputProps('salary')} label="Salary" left="$" mr="4" />
              <RHFInput {...getInputProps('matchPercent')} label="Match percent" right="%" />
            </Flex>
          )}
        <RHFInput {...getInputProps('employeeContributions')} label="Employee contributions" left="$" help={employeeContributions < maxEmployee401k ? 'You should consider maximizing your employee contributions before megabackdoor Roth' : null} />
        <Button type="submit" mt="4">Submit</Button>
      </Box>
      {afterTaxLimit && (
      <Text>
        {/* Add a future value calculator */}
        Your after tax limit is
        <Text as="strong" mx="1">
          {getDollar(afterTaxLimit)}
          .
        </Text>
      </Text>
      )}
    </>
  );
};
AfterTaxSpaceCalculator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
const PerPaycheck = ({ limit, employeeContributions }) => {
  const { getInputProps, watch } = useForm({
    defaultValues: { noOfPaychecks: 26, traditional: true },
  });
  const { noOfPaychecks, traditional } = watch();
  const getPaycheckForAmount = useCallback(
    (amount) => getDollar(amount / noOfPaychecks),
    [noOfPaychecks],
  );
  return (
    <>
      <Box>
        <RHFInput {...getInputProps('noOfPaychecks')} label="Number of paychecks" right="/yr" />
        <RHFCheckbox {...getInputProps('traditional')} label="Traditional employee contributions" />
      </Box>
      <Box mt="4">
        <Text>
          You should have
          <Text as="strong" mx="1">{getPaycheckForAmount(limit)}</Text>
          for your after tax contribution amount to maximize your after tax space.
        </Text>
        <Text>
          In addition, you should have
          <Text as="strong" mx="1">{getPaycheckForAmount(employeeContributions)}</Text>
          in employee contributions directly to
          {' '}
          {traditional ? 'traditional' : 'Roth'}
          {' '}
          401k.
        </Text>
      </Box>
    </>
  );
};
PerPaycheck.propTypes = {
  limit: PropTypes.number.isRequired,
  employeeContributions: PropTypes.number.isRequired,
};
const MegaBackdoorRoth = () => {
  const [{ limit, employeeContributions } = {}, setCalculatedAfterTaxMax] = useState(undefined);
  return (
    <>
      <Heading size="lg" mb="4">Megabackdoor Roth</Heading>
      {Intro}
      <AfterTaxSpaceCalculator onSubmit={setCalculatedAfterTaxMax} />
      {limit && <PerPaycheck limit={limit} employeeContributions={employeeContributions} />}
    </>
  );
};
export default MegaBackdoorRoth;

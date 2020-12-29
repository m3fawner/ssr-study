import {
  Heading, Text, Box, Button, Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import useForm from '../hooks/useForm';
import yup from '../util/yup';
import RHFInput from './RHFInput';
import RHFCheckbox from './RHFCheckbox';

// TODO: Adjust for over 55 (add input for swapping)
const TOTAL_401K_LIMIT = 58000;
const BASE_401K_LIMIT = 19500;
const TOTAL_401K_LIMIT_IN_DOLLARS = TOTAL_401K_LIMIT.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const BASE_401K_LIMIT_IN_DOLLARS = BASE_401K_LIMIT.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
      familiar with.
    </Text>
    <Text>
      &nbsp;&nbsp;However, the total 401k limit is actually
      {' '}
      {TOTAL_401K_LIMIT_IN_DOLLARS}
      !
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
  </>
);
const schema = yup.object({
  flatMatch: yup.bool(),
  flatMatchAmount: yup.number().min(0).label('Flat match amount'),
  salary: yup.number().min(0).label('Salary'),
  matchPercent: yup.number().min(0).label('Match percent'),
  employeeContributions: yup.number().min(0).max(BASE_401K_LIMIT).label('Employee contributions'),
});
const AfterTaxSpaceCalculator = () => {
  const [afterTaxLimit, setAfterTaxLimit] = useState(null);
  const { getInputProps, watch, handleSubmit } = useForm({
    defaultValues: {
      flatMatch: false,
      matchPercent: 4,
      salary: 100000,
      employeeContributions: BASE_401K_LIMIT,
    },
  }, schema);
  const {
    flatMatch, employeeContributions, matchPercent, salary, flatMatchAmount,
  } = watch();
  const onSubmit = handleSubmit(() => {
    const match = flatMatch ? flatMatchAmount : (salary * (matchPercent / 100));
    setAfterTaxLimit(TOTAL_401K_LIMIT - match - employeeContributions);
  });
  return (
    <>
      <Box as="form" pb="4" onSubmit={onSubmit}>
        <RHFCheckbox {...getInputProps('flatMatch')} label="Flat match (not percentage based)?" />
        {flatMatch
          ? <RHFInput {...getInputProps('flatMatchAmount')} label="Flat match amount" />
          : (
            <Flex>
              <RHFInput {...getInputProps('salary')} label="Salary" left="$" />
              <RHFInput {...getInputProps('matchPercent')} label="Match percent" right="%" />
            </Flex>
          )}
        <RHFInput {...getInputProps('employeeContributions')} label="Employee contributions" left="$" help={employeeContributions < BASE_401K_LIMIT ? 'You should consider maximizing your employee contributions before megabackdoor Roth' : null} />
        <Button type="submit" mt="4">Submit</Button>
      </Box>
      {afterTaxLimit && (
      <Text>
        {/* With after tax limit, do a "per paycheck" calculator & a future value calculator */}
        Your after tax limit is
        {' '}
        {afterTaxLimit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Text>
      )}
    </>
  );
};
const MegaBackdoorRoth = () => (
  <>
    <Heading size="lg" mb="4">Megabackdoor Roth</Heading>
    {Intro}
    <AfterTaxSpaceCalculator />
  </>
);

export default MegaBackdoorRoth;

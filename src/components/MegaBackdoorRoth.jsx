import {
  Text, Box, Button, Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useCallback, useState, useMemo } from 'react';
import useForm from '../hooks/useForm';
import yup from '../util/yup';
import { getDollar } from '../util/formatters';
import RHFInput from './RHFInput';
import RHFCheckbox from './RHFCheckbox';

const TOTAL_401K_LIMIT_OVER_55 = 67500;
const TOTAL_401K_LIMIT = 61000;
const BASE_401K_LIMIT_OVER_55 = 27000;
const BASE_401K_LIMIT = 20500;
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
    defaultValues: { noOfPaychecks: 24, traditional: true },
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
      <AfterTaxSpaceCalculator onSubmit={setCalculatedAfterTaxMax} />
      {limit && <PerPaycheck limit={limit} employeeContributions={employeeContributions} />}
    </>
  );
};
export default MegaBackdoorRoth;

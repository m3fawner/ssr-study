import { FormControl, FormErrorMessage, Checkbox } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const RHFInput = ({
  register, name, label, errors, ...props
}) => {
  const error = get(errors, name);
  return (
    <FormControl {...props}>
      <Checkbox name={name} ref={register} mt="4" isInvalid={!!error}>{label}</Checkbox>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
RHFInput.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape().isRequired,
};
export default RHFInput;

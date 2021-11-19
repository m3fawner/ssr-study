import { forwardRef } from 'react';
import { FormControl, FormErrorMessage, Checkbox } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const RHFCheckbox = forwardRef(({
  onChange, onBlur, name, label, errors, ...props
}, ref) => {
  const error = get(errors, name);
  return (
    <FormControl {...props}>
      <Checkbox onChange={onChange} onBlur={onBlur} name={name} ref={ref} mt="4" isInvalid={!!error}>{label}</Checkbox>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
});
RHFCheckbox.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape(),
};
RHFCheckbox.defaultProps = {
  errors: {},
  onChange: () => {},
  onBlur: () => {},
};
export default RHFCheckbox;

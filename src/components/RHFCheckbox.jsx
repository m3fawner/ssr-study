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
  ref: PropTypes.oneOfType([PropTypes.instanceOf(typeof window === 'undefined' ? null : HTMLElement), PropTypes.func]).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.onBlur,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape().isRequired,
};
RHFCheckbox.defaultProps = {
  onChange: null,
  onBlur: null,
};
export default RHFCheckbox;

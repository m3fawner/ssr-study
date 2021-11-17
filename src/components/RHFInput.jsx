import { forwardRef } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const RHFInput = forwardRef(({
  name, onChange, onBlur, left, right, label, errors, help, ...props
}, ref) => {
  const error = get(errors, name);
  return (
    <FormControl mt="4" isInvalid={!!error} {...props}>
      <FormLabel htmlFor={name}>
        {label}
      </FormLabel>
      <InputGroup>
        {left && <InputLeftAddon>{left}</InputLeftAddon>}
        <Input ref={ref} onChange={onChange} onBlur={onBlur} name={name} />
        {right && <InputRightAddon>{right}</InputRightAddon>}
      </InputGroup>
      {help && <FormHelperText>{help}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
});
RHFInput.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.instanceOf(typeof window === 'undefined' ? null : HTMLElement), PropTypes.func]).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.onBlur,
  name: PropTypes.string.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape().isRequired,
  help: PropTypes.string,
};
RHFInput.defaultProps = {
  onChange: null,
  onBlur: null,
  left: null,
  right: null,
  help: null,
};

export default RHFInput;

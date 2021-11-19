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
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape(),
  help: PropTypes.string,
};
RHFInput.defaultProps = {
  errors: {},
  onChange: () => {},
  onBlur: () => {},
  left: null,
  right: null,
  help: null,
};

export default RHFInput;

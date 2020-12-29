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

const RHFInput = ({
  register, name, left, right, label, errors, help, ...props
}) => {
  const error = get(errors, name);
  return (
    <FormControl mt="4" isInvalid={!!error} {...props}>
      <FormLabel htmlFor={name}>
        {label}
      </FormLabel>
      <InputGroup>
        {left && <InputLeftAddon>{left}</InputLeftAddon>}
        <Input ref={register} name={name} />
        {right && <InputRightAddon>{right}</InputRightAddon>}
      </InputGroup>
      {help && <FormHelperText>{help}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
RHFInput.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
  label: PropTypes.node.isRequired,
  errors: PropTypes.shape().isRequired,
  help: PropTypes.string,
};
RHFInput.defaultProps = {
  left: null,
  right: null,
  help: null,
};

export default RHFInput;

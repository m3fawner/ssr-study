import { forwardRef, ForwardedRef } from 'react';
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
import get from 'lodash/get';
import { RHFInputProps } from './RHFTypes';

const RHFInput = forwardRef(({
  name, onChange, onBlur, left, right, label, errors = {}, help, ...props
}: RHFInputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
      {help && <FormHelperText color="gray.600">{help}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
});

export default RHFInput;

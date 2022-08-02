import {
  forwardRef, ForwardedRef,
} from 'react';
import { FormControl, FormErrorMessage, Checkbox } from '@chakra-ui/react';
import get from 'lodash/get';
import { RHFCheckboxProps } from './RHFTypes';

const RHFCheckbox = forwardRef(({
  onChange, onBlur, name, label, errors = {}, ...props
}: RHFCheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
  const error = get(errors, name);
  return (
    <FormControl {...props}>
      <Checkbox onChange={onChange} onBlur={onBlur} name={name} ref={ref} mt="4" isInvalid={!!error}>{label}</Checkbox>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
});
export default RHFCheckbox;

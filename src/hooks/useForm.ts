import { useForm as rhfUseForm, UseFormProps, RegisterOptions } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useForm = (formArgs: UseFormProps, schema?: yup.AnyObjectSchema) => {
  const { register, formState: { errors }, ...rest } = rhfUseForm({
    ...formArgs,
    mode: 'onBlur',
    resolver: schema ? yupResolver(schema) : undefined,
  });
  return ({
    ...rest,
    register,
    errors,
    getInputProps: (name: string, registerArgs?: RegisterOptions) => ({
      ...register(name, registerArgs),
      name,
      id: name,
      errors,
    }),
  });
};

export default useForm;

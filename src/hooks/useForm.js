import { useForm as rhfUseForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useForm = (formArgs, schema) => {
  const { register, errors, ...rest } = rhfUseForm({
    ...formArgs,
    mode: 'onBlur',
    resolver: schema ? yupResolver(schema) : undefined,
  });
  return ({
    ...rest,
    register,
    errors,
    getInputProps: (name, registerArgs) => ({
      register: registerArgs ? register(registerArgs) : register,
      name,
      id: name,
      errors,
    }),
  });
};

export default useForm;

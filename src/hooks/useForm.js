import { useForm as rhfUseForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

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
      ...register(name, registerArgs),
      name,
      id: name,
      errors,
    }),
  });
};

export default useForm;

import { ReactNode, ReactEventHandler } from 'react';
import { StyleProps } from '@chakra-ui/react';

export type RHFCommonInputProps = {
  onChange?: ReactEventHandler,
  onBlur?: ReactEventHandler,
  name: string,
  label: ReactNode,
  errors?: Record<string, { message: string }>
} & StyleProps;

export type RHFInputProps = {
  left?: ReactNode,
  right?: ReactNode,
  help?: ReactNode,
} & RHFCommonInputProps;

export type RHFCheckboxProps = RHFCommonInputProps;

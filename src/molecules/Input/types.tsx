import { TFormInputConfig } from '@organisms/StandardForm/types';
import { ControllerRenderProps, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export type TFieldComponent = Record<string, React.FC<any>>;

export interface InputProps {
  config: TFormInputConfig;
  children?: React.ReactNode;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, any>;
  inputProps?: ControllerRenderProps<FieldValues, string>;
}

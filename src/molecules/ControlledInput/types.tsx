import { TFormInputConfig } from '@organisms/StandardForm/types';

export type TFieldComponent = Record<string, React.FC<any>>;

export interface InputProps {
  config: TFormInputConfig;
  children?: React.ReactNode;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, any>;
}

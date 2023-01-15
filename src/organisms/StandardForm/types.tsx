import { ReactComponentElement } from 'react';
import { DeepPartial } from 'react-hook-form';
import { TProject } from 'src/models/Project/types/Project.type';
import { CrudErrorInfo } from 'src/utils/types/error-types';
import { TFormInputType } from 'src/utils/types/form-types';
import { AnySchema } from 'yup';

export type ModelTypes = TProject | string;
export type TFormInputConfig = {
  name: string;
  type: TFormInputType;
  label: string;
  placeholder?: string;
  validation?: AnySchema;
};

export interface StandardFormProps<T>  {
  children?: React.ReactNode;
  className?: string;
  initialValues?: DeepPartial<T>;
  errors?: CrudErrorInfo<T>;
  config: TFormInputConfig[];
  onSubmit: (data: Partial<T>) => void;
}

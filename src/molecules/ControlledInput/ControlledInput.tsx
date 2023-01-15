import { InputProps } from './types';
import React, { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '@molecules/Input/Input';

const ControlledInput: React.FC<InputProps> = ({ config, onChange, className, ...rest }) => {
  const formContext = useFormContext();
  const { formState, control, setValue } = formContext;

  return (
    <Controller
      control={control}
      name={config.name}
      render={({ field: { onChange: fieldOnChange, ...field }, ...rest2 }) => {
        const customOnChange = (e: ChangeEvent<HTMLInputElement>) => {
          const isImage = config.type === 'image';
          onChange?.(e);
          fieldOnChange(isImage ? e.target.files : e);
        };
        return (
          <Input
            config={config}
            inputProps={{ ...field, onChange: customOnChange }}
            errors={formState?.errors?.[config.name]}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledInput;

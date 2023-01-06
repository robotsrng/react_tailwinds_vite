import { InputProps } from './types';
import React, { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '@molecules/Input/Input';

const ControlledInput: React.FC<InputProps> = ({ config, onChange, className, ...rest }) => {
  const formContext = useFormContext();
  const {  formState, control } = formContext;

  return (
    <Controller
      control={control}
      name={config.name}
      render={({ field: { onChange: fieldOnChange, ...field } }) => {
      const customOnChange = (e: ChangeEvent<HTMLInputElement>) => {
          onChange?.(e);
          fieldOnChange(e);
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

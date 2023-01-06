import {  StandardFormProps } from './types';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getValidationSchema } from 'src/utils/form-helpers/schema.helpers';
import { Button } from '@molecules/index';
import ControlledInput from '@molecules/ControlledInput/ControlledInput';
import { capitalize } from 'lodash';

const StandardForm = <T extends FieldValues>({
  children,
  className,
  config,
  onSubmit,
  initialValues,
  errors,
  ...rest
}: React.PropsWithChildren<StandardFormProps<T>>) => {
  const schema = getValidationSchema(config);
  const hookForm = useForm<T>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });
  const { handleSubmit, reset } = hookForm;

  const submitForm = (data: T) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...hookForm}>
      <form className={`flex flex-col space-y-4 ${className} `} onSubmit={handleSubmit(submitForm)} {...rest}>
        {config.map((input) => (
          <ControlledInput key={input.name} config={input} />
        ))}
        <Button type='submit'>Submit</Button>
        {errors?.map((error: Record<string, string>) => {
          return Object.entries(error).map(([key, value]) => {
            return <p key={key}>{capitalize(key)}: {value}</p>;
          });
        })}
      </form>
    </FormProvider>
  );
};

export default StandardForm;

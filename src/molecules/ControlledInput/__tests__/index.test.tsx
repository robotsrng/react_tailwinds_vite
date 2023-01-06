import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import ControlledInput from '../ControlledInput';
import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';

const DEFAULT_PROPS = {
  config: {
    name: 'test',
    label: 'Test',
    type: 'text',
  },
};
const Wrapper = (props: { children: React.ReactNode }) => {
  const formMethods = useForm();

  return <FormProvider {...formMethods}>{props.children}</FormProvider>;
};
describe('<ControlledInput />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Wrapper>
        <ControlledInput {...DEFAULT_PROPS} />
      </Wrapper>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(
      <Wrapper>
        <ControlledInput data-testid='test-ControlledInput' {...DEFAULT_PROPS} />
      </Wrapper>
    );
    expect(screen.getByTestId('test-ControlledInput')).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import StandardForm from '../StandardForm';

const DEFAULT_PROPS = {
  config: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter name',
    },
  ],
  onSubmit: () => {},
  
};
describe('<StandardForm />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StandardForm {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  // Change this to is should render inputs from config
  // it('should render children', () => {
  //   render(<StandardForm {...DEFAULT_PROPS} />);
  //   expect(screen.getByText('Test')).toBeTruthy();
  // });

  it('should render with data-test-id', () => {
    render(<StandardForm data-testid='test-StandardForm' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-StandardForm')).toBeTruthy();
  });
});

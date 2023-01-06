import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import Input from '../Input';

const DEFAULT_PROPS = {
  config: {
    name: 'test',
    label: 'Test',
    type: 'text',
  },
};
describe('<Input />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<Input {...DEFAULT_PROPS} />);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<Input data-testid='test-Input' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-Input')).toBeTruthy();
  });
});

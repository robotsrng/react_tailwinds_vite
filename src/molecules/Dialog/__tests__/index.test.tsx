import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import Dialog from '../Dialog';

const DEFAULT_PROPS = {
  title: 'Test',
  description: 'Description',
  content: 'Content',
  isOpen: true,
  handleClose: () => {},
};
describe('<Dialog />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<Dialog {...DEFAULT_PROPS} />);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<Dialog data-testid='test-Dialog' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-Dialog')).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import TextFieldArea from '../TextFieldArea';

const DEFAULT_PROPS = {};
describe('<TextFieldArea />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextFieldArea {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<TextFieldArea data-testid='test-TextFieldArea' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-TextFieldArea')).toBeTruthy();
  });
});

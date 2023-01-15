import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import InputBase from '../InputBase';

const DEFAULT_PROPS = {};
describe('<InputBase />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputBase {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });


  it('should render with data-test-id', () => {
    render(<InputBase data-testid='test-InputBase' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-InputBase')).toBeTruthy();
  });
});

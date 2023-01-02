import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import IconButton from '../IconButton';

const DEFAULT_PROPS = {
  name: 'puzzle',
  onClick: () => {},
};
describe('<IconButton />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconButton {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<IconButton data-testid='test-IconButton' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-IconButton')).toBeTruthy();
  });
});

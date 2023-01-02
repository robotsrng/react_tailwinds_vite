import { render, screen } from '../../../utils/test-utils';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('should render successfully with a named Icon', () => {
    const { baseElement } = render(<Icon name={'Puzzle'} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<Icon name={'Puzzle'} data-testid='test-Icon' />);
    expect(screen.getByTestId('test-Icon')).toBeTruthy();
  });

  it("Should not render anything if the name doesn't match any Icon", () => {
    render(<Icon data-testid='test' name={'Not an Icon'} />);
    const icon = screen.queryByTestId('test');
    expect(icon).toBeNull();
  });
});

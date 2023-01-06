import { kebabToPascalCase } from 'src/utils/string-utils';
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

  it('should apply the iconClassName prop to the icon component', () => {
    render(<Icon name={'Puzzle'} iconClassName='test-class' data-testid='test' />);
    const icon = screen.getByTestId('test');
    const svgComponent = icon.querySelector('.test-class');
    expect(svgComponent).toBeTruthy();
  });

  it('should render the correct icon component based on the name prop', () => {
    render(<Icon name={'Puzzle'} data-testid='puzzle-icon' />);
    expect(screen.getByTestId('puzzle-icon')).toBeTruthy();

    render(<Icon name={'Check'} data-testid='check-icon' />);
    expect(screen.getByTestId('check-icon')).toBeTruthy();

    render(<Icon name={'CloseX'} data-testid='heart-icon' />);
    expect(screen.getByTestId('heart-icon')).toBeTruthy();
  });

});

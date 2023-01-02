import { render, screen } from '../../../utils/test-utils';
import SidebarToggleButton from '../SidebarToggleButton';

const DEFAULT_PROPS = {
  onClick: () => null,
  open: true,
};

describe('<SidebarToggleButton />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarToggleButton {...DEFAULT_PROPS}>Test</SidebarToggleButton>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(
      <SidebarToggleButton
        data-testid='test-SidebarToggleButton'
        {...DEFAULT_PROPS}
      />
    );
    expect(screen.getByTestId('test-SidebarToggleButton')).toBeTruthy();
  });
});

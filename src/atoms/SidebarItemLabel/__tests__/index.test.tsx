import { render, screen } from '../../../utils/test-utils';
import SidebarItemLabel from '../SidebarItemLabel';
const DEFAULT_PROPS = {
  label: 'Home',
};
describe('<SidebarItemLabel />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarItemLabel {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(
      <SidebarItemLabel
        data-testid='test-SidebarItemLabel'
        {...DEFAULT_PROPS}
      />
    );
    expect(screen.getByTestId('test-SidebarItemLabel')).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import SidebarList from '../SidebarList';
const DEFAULT_PROPS = {
  config: [
    {
      label: 'Home',
      icon: 'home',
      url: '/',
    },
  ],
};
describe('<SidebarList />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarList {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(
      <SidebarList
        data-testid='test-SidebarList'
        {...DEFAULT_PROPS}
      />
    );
    expect(screen.getByTestId('test-SidebarList')).toBeTruthy();
  });
});

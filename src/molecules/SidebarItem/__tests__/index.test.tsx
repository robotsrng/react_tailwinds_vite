import { render, screen } from '../../../utils/test-utils';
import SidebarItem from '../SidebarItem';
const DEFAULT_PROPS = {
  icon: 'Puzzle',
  label: 'Test',
  link: 'www.test.com',
  notifications: 2,
};

describe('<SidebarItem />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarItem {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<SidebarItem {...DEFAULT_PROPS} />);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(
      <SidebarItem
        data-testid='test-SidebarItem'
        {...DEFAULT_PROPS}
      />
    );
    expect(screen.getByTestId('test-SidebarItem')).toBeTruthy();
  });
});

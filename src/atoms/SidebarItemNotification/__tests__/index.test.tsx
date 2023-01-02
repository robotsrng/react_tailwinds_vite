import { render, screen } from '../../../utils/test-utils';
import SidebarItemNotification from "../SidebarItemNotification";

describe("<SidebarItemNotification />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SidebarItemNotification>Test</SidebarItemNotification>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SidebarItemNotification>Test</SidebarItemNotification>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SidebarItemNotification data-testid="test-SidebarItemNotification">
        Test
      </SidebarItemNotification>
    );
    expect(screen.getByTestId("test-SidebarItemNotification")).toBeTruthy();
  });
});

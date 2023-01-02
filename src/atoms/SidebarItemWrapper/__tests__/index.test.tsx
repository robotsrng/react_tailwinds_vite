import { render, screen } from '../../../utils/test-utils';
import SidebarItem from "../SidebarItemWrapper";

describe("<SidebarItem />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SidebarItem>Test</SidebarItem>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SidebarItem>Test</SidebarItem>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SidebarItem data-testid="test-SidebarItem">
        Test
      </SidebarItem>
    );
    expect(screen.getByTestId("test-SidebarItem")).toBeTruthy();
  });
});

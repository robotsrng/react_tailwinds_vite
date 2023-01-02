import { render, screen } from '../../../utils/test-utils';

import SidebarItemContent from "../SidebarItemContent";
import { describe, it } from 'vitest';


describe("<SidebarItemContent />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SidebarItemContent>Test</SidebarItemContent>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SidebarItemContent>Test</SidebarItemContent>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SidebarItemContent data-testid="test-SidebarItemContent">
        Test
      </SidebarItemContent>
    );
    expect(screen.getByTestId("test-SidebarItemContent")).toBeTruthy();
  });
});

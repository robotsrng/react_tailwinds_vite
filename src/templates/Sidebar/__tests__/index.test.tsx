import { render, screen } from '../../../utils/test-utils';
import Sidebar from "../Sidebar";

describe("<Sidebar />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Sidebar>Test</Sidebar>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<Sidebar>Test</Sidebar>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <Sidebar data-testid="test-Sidebar">
        Test
      </Sidebar>
    );
    expect(screen.getByTestId("test-Sidebar")).toBeTruthy();
  });
});

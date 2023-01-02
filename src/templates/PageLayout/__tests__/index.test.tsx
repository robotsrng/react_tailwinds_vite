import { render, screen } from '../../../utils/test-utils';
import PageLayout from "../PageLayout";

describe("<PageLayout />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PageLayout>Test</PageLayout>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<PageLayout>Test</PageLayout>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <PageLayout data-testid="test-PageLayout">
        Test
      </PageLayout>
    );
    expect(screen.getByTestId("test-PageLayout")).toBeTruthy();
  });
});

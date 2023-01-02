import { render, screen } from '../../../utils/test-utils';
import PageContent from "../PageContent";

describe("<PageContent />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PageContent>Test</PageContent>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<PageContent>Test</PageContent>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <PageContent data-testid="test-PageContent">
        Test
      </PageContent>
    );
    expect(screen.getByTestId("test-PageContent")).toBeTruthy();
  });
});

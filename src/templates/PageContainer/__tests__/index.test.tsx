import { render, screen } from '../../../utils/test-utils';
import PageContainer from "../PageContainer";

describe("<PageContainer />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PageContainer>Test</PageContainer>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<PageContainer>Test</PageContainer>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <PageContainer data-testid="test-PageContainer">
        Test
      </PageContainer>
    );
    expect(screen.getByTestId("test-PageContainer")).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import Container from "../Container";

describe("<Container />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Container>Test</Container>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<Container>Test</Container>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <Container data-testid="test-Container">
        Test
      </Container>
    );
    expect(screen.getByTestId("test-Container")).toBeTruthy();
  });
});

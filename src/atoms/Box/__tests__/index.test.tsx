import { render, screen } from '../../../utils/test-utils';
import Box from "../Box";

describe("<Box />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Box>Test</Box>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<Box>Test</Box>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <Box data-testid="test-Box">
        Test
      </Box>
    );
    expect(screen.getByTestId("test-Box")).toBeTruthy();
  });
});

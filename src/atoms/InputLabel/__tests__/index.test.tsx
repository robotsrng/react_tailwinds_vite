import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import InputLabel from "../InputLabel";

const DEFAULT_PROPS = {
};
describe("<InputLabel />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<InputLabel {...DEFAULT_PROPS}>Test</InputLabel>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<InputLabel  {...DEFAULT_PROPS}>Test</InputLabel>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <InputLabel data-testid="test-InputLabel"  {...DEFAULT_PROPS}>
        Test
      </InputLabel>
    );
    expect(screen.getByTestId("test-InputLabel")).toBeTruthy();
  });
});

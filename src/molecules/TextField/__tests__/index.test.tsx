import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import TextField from "../TextField";

const DEFAULT_PROPS = {
};
describe("<TextField />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TextField {...DEFAULT_PROPS}>Test</TextField>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<TextField  {...DEFAULT_PROPS}>Test</TextField>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <TextField data-testid="test-TextField"  {...DEFAULT_PROPS}>
        Test
      </TextField>
    );
    expect(screen.getByTestId("test-TextField")).toBeTruthy();
  });
});

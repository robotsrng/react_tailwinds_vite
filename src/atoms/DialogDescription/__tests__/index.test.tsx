import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import DialogDescription from "../DialogDescription";

const DEFAULT_PROPS = {
};
describe("<DialogDescription />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DialogDescription {...DEFAULT_PROPS}>Test</DialogDescription>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<DialogDescription  {...DEFAULT_PROPS}>Test</DialogDescription>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <DialogDescription data-testid="test-DialogDescription"  {...DEFAULT_PROPS}>
        Test
      </DialogDescription>
    );
    expect(screen.getByTestId("test-DialogDescription")).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import DialogBase from "../DialogBase";

const DEFAULT_PROPS = {
};
describe("<DialogBase />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DialogBase {...DEFAULT_PROPS}>Test</DialogBase>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<DialogBase  {...DEFAULT_PROPS}>Test</DialogBase>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <DialogBase data-testid="test-DialogBase"  {...DEFAULT_PROPS}>
        Test
      </DialogBase>
    );
    expect(screen.getByTestId("test-DialogBase")).toBeTruthy();
  });
});

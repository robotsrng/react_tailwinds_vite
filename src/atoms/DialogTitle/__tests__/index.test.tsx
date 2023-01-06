import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import DialogTitle from "../DialogTitle";

const DEFAULT_PROPS = {
};
describe("<DialogTitle />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DialogTitle {...DEFAULT_PROPS}>Test</DialogTitle>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<DialogTitle  {...DEFAULT_PROPS}>Test</DialogTitle>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <DialogTitle data-testid="test-DialogTitle"  {...DEFAULT_PROPS}>
        Test
      </DialogTitle>
    );
    expect(screen.getByTestId("test-DialogTitle")).toBeTruthy();
  });
});

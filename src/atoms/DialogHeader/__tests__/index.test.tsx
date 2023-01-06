import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import DialogHeader from "../DialogHeader";

const DEFAULT_PROPS = {
};
describe("<DialogHeader />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DialogHeader {...DEFAULT_PROPS}>Test</DialogHeader>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<DialogHeader  {...DEFAULT_PROPS}>Test</DialogHeader>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <DialogHeader data-testid="test-DialogHeader"  {...DEFAULT_PROPS}>
        Test
      </DialogHeader>
    );
    expect(screen.getByTestId("test-DialogHeader")).toBeTruthy();
  });
});

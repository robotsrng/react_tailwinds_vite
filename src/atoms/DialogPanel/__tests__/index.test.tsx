import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import DialogPanel from "../DialogPanel";

const DEFAULT_PROPS = {
};
describe("<DialogPanel />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DialogPanel {...DEFAULT_PROPS}>Test</DialogPanel>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<DialogPanel  {...DEFAULT_PROPS}>Test</DialogPanel>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <DialogPanel data-testid="test-DialogPanel"  {...DEFAULT_PROPS}>
        Test
      </DialogPanel>
    );
    expect(screen.getByTestId("test-DialogPanel")).toBeTruthy();
  });
});

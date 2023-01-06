import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import Overlay from "../Overlay";

const DEFAULT_PROPS = {
};
describe("<Overlay />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Overlay {...DEFAULT_PROPS}>Test</Overlay>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<Overlay  {...DEFAULT_PROPS}>Test</Overlay>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <Overlay data-testid="test-Overlay"  {...DEFAULT_PROPS}>
        Test
      </Overlay>
    );
    expect(screen.getByTestId("test-Overlay")).toBeTruthy();
  });
});

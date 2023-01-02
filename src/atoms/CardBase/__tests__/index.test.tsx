import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import CardBase from "../CardBase";

const DEFAULT_PROPS = {
};
describe("<CardBase />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardBase {...DEFAULT_PROPS}>Test</CardBase>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<CardBase  {...DEFAULT_PROPS}>Test</CardBase>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <CardBase data-testid="test-CardBase"  {...DEFAULT_PROPS}>
        Test
      </CardBase>
    );
    expect(screen.getByTestId("test-CardBase")).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import CardContent from "../CardContent";

const DEFAULT_PROPS = {
};
describe("<CardContent />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardContent {...DEFAULT_PROPS}>Test</CardContent>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<CardContent  {...DEFAULT_PROPS}>Test</CardContent>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <CardContent data-testid="test-CardContent"  {...DEFAULT_PROPS}>
        Test
      </CardContent>
    );
    expect(screen.getByTestId("test-CardContent")).toBeTruthy();
  });
});

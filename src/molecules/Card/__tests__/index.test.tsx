import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import Card from "../Card";

const DEFAULT_PROPS = {
};
describe("<Card />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Card {...DEFAULT_PROPS}>Test</Card>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<Card  {...DEFAULT_PROPS}>Test</Card>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <Card data-testid="test-Card"  {...DEFAULT_PROPS}>
        Test
      </Card>
    );
    expect(screen.getByTestId("test-Card")).toBeTruthy();
  });
});

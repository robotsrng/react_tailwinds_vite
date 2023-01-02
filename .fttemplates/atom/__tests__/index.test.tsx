import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import [FTName] from "../[FTName]";

const DEFAULT_PROPS = {
};
describe("<[FTName] />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<[FTName] {...DEFAULT_PROPS}>Test</[FTName]>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<[FTName]  {...DEFAULT_PROPS}>Test</[FTName]>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <[FTName] data-testid="test-[FTName]"  {...DEFAULT_PROPS}>
        Test
      </[FTName]>
    );
    expect(screen.getByTestId("test-[FTName]")).toBeTruthy();
  });
});

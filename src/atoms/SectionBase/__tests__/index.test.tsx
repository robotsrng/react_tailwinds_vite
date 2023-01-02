import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionBase from "../SectionBase";

const DEFAULT_PROPS = {
};
describe("<SectionBase />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionBase {...DEFAULT_PROPS}>Test</SectionBase>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SectionBase  {...DEFAULT_PROPS}>Test</SectionBase>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionBase data-testid="test-SectionBase"  {...DEFAULT_PROPS}>
        Test
      </SectionBase>
    );
    expect(screen.getByTestId("test-SectionBase")).toBeTruthy();
  });
});

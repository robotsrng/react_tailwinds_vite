import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionHeader from "../SectionHeader";

const DEFAULT_PROPS = {
};
describe("<SectionHeader />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionHeader {...DEFAULT_PROPS}>Test</SectionHeader>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SectionHeader  {...DEFAULT_PROPS}>Test</SectionHeader>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionHeader data-testid="test-SectionHeader"  {...DEFAULT_PROPS}>
        Test
      </SectionHeader>
    );
    expect(screen.getByTestId("test-SectionHeader")).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionContent from "../SectionContent";

const DEFAULT_PROPS = {
};
describe("<SectionContent />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionContent {...DEFAULT_PROPS}>Test</SectionContent>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SectionContent  {...DEFAULT_PROPS}>Test</SectionContent>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionContent data-testid="test-SectionContent"  {...DEFAULT_PROPS}>
        Test
      </SectionContent>
    );
    expect(screen.getByTestId("test-SectionContent")).toBeTruthy();
  });
});

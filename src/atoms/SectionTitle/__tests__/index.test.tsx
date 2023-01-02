import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionTitle from "../SectionTitle";

const DEFAULT_PROPS = {
};
describe("<SectionTitle />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionTitle {...DEFAULT_PROPS}>Test</SectionTitle>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SectionTitle  {...DEFAULT_PROPS}>Test</SectionTitle>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionTitle data-testid="test-SectionTitle"  {...DEFAULT_PROPS}>
        Test
      </SectionTitle>
    );
    expect(screen.getByTestId("test-SectionTitle")).toBeTruthy();
  });
});

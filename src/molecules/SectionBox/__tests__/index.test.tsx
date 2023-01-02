import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionBox from "../SectionBox";

const DEFAULT_PROPS = {
};
describe("<SectionBox />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionBox {...DEFAULT_PROPS}>Test</SectionBox>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<SectionBox  {...DEFAULT_PROPS}>Test</SectionBox>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionBox data-testid="test-SectionBox"  {...DEFAULT_PROPS}>
        Test
      </SectionBox>
    );
    expect(screen.getByTestId("test-SectionBox")).toBeTruthy();
  });
});

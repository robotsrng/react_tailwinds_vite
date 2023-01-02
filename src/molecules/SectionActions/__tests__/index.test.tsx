import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionActions from "../SectionActions";

const DEFAULT_PROPS = {
  actions: [
    {
      label: "Action 1",
      onClick: () => console.log("Action 1"),
    },
    {
      label: "Action 2",
      onClick: () => console.log("Action 2"),
    },
  ],
};
describe("<SectionActions />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionActions {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <SectionActions data-testid="test-SectionActions"  {...DEFAULT_PROPS}>
        Test
      </SectionActions>
    );
    expect(screen.getByTestId("test-SectionActions")).toBeTruthy();
  });

  // TODO - add tests for functionality and styling inc actions
});

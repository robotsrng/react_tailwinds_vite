import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import PasswordInput from "../PasswordInput";

const DEFAULT_PROPS = {
};
describe("<PasswordInput />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PasswordInput {...DEFAULT_PROPS}>Test</PasswordInput>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<PasswordInput  {...DEFAULT_PROPS}>Test</PasswordInput>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <PasswordInput data-testid="test-PasswordInput"  {...DEFAULT_PROPS}>
        Test
      </PasswordInput>
    );
    expect(screen.getByTestId("test-PasswordInput")).toBeTruthy();
  });
});

import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import ImageInput from "../ImageInput";

const DEFAULT_PROPS = {
};
describe("<ImageInput />", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ImageInput {...DEFAULT_PROPS}>Test</ImageInput>);
    expect(baseElement).toBeTruthy();
  });

  it("should render children", () => {
    render(<ImageInput  {...DEFAULT_PROPS}>Test</ImageInput>);
    expect(screen.getByText("Test")).toBeTruthy();
  });

  it("should render with data-test-id", () => {
    render(
      <ImageInput data-testid="test-ImageInput"  {...DEFAULT_PROPS}>
        Test
      </ImageInput>
    );
    expect(screen.getByTestId("test-ImageInput")).toBeTruthy();
  });
});

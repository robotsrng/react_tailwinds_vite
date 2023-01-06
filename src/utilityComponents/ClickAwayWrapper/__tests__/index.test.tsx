import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import ClickAwayWrapper from '../ClickAwayWrapper';

const DEFAULT_PROPS = {
  onClickAway: () => {},
};
describe('<ClickAwayWrapper />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ClickAwayWrapper {...DEFAULT_PROPS}>
        <div>Test</div>
      </ClickAwayWrapper>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(
      <ClickAwayWrapper {...DEFAULT_PROPS}>
        <div>Test</div>
      </ClickAwayWrapper>
    );
    expect(screen.getByText('Test')).toBeTruthy();
  });

});

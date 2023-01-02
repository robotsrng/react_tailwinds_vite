import { render, screen } from '../../../utils/test-utils';
import { describe, it } from 'vitest';
import SectionFooter from '../SectionFooter';

const DEFAULT_PROPS = {
  actions: [
    {
      label: 'Action 1',
      onClick: () => console.log('Action 1'),
    },
    {
      label: 'Action 2',
      onClick: () => console.log('Action 2'),
    },
  ],
};
describe('<SectionFooter />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionFooter {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<SectionFooter data-testid='test-SectionFooter' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-SectionFooter')).toBeTruthy();
  });
  
  // TODO - add tests for functionality and styling inc actions
});

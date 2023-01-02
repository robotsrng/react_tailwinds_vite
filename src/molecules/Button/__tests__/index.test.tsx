import { render, screen } from '../../../utils/test-utils';
import { describe, it, vi } from 'vitest';
import Button from '../Button';

const DEFAULT_PROPS = {
  onClick: () => {},
  label: 'Test',
};
describe('<Button />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button {...DEFAULT_PROPS} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<Button {...DEFAULT_PROPS} />);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<Button data-testid='test-Button' {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('test-Button')).toBeTruthy();
  });
});

describe('<Button /> functionality', () => {
  it('should fire onClick if provided and clicked', () => {
    const onClick = vi.fn();
    render(<Button {...DEFAULT_PROPS} onClick={onClick} />);
    const button = screen.getByText('Test');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});

describe('<Button /> styling', () => {
  it('should append any additional classnames provided', () => {
    render(<Button {...DEFAULT_PROPS} className={'test'} />);
    const button = screen.getByText('Test');
    expect(button.classList.contains('test'));
  });

  it('should provide the correct classnames based on the variant provided', () => {
    render(<Button {...DEFAULT_PROPS} variant='primary' />);
    const button = screen.getByText('Test');
    expect(button.classList.contains('btn-primary'));
  });

  it('should render a start icon when provided', () => {
    render(<Button {...DEFAULT_PROPS} startIcon='Check' />);
    expect(screen.getByTestId('button-start-icon')).toBeTruthy();
  })

  it('should render an end icon when provided', () => {
    render(<Button {...DEFAULT_PROPS} endIcon='Check' />);
    expect(screen.getByTestId('button-end-icon')).toBeTruthy();
  })

});

describe('<Button /> states', () => {
  it('should render a loading spinner if loading is true', () => {
    render(<Button {...DEFAULT_PROPS} loading />);
    expect(screen.getByTestId('button-loading-icon')).toBeTruthy();
  });

  it('should render a success icon if success is true', () => {
    render(<Button {...DEFAULT_PROPS} success />);
    expect(screen.getByTestId('button-success-icon')).toBeTruthy();
  });
})

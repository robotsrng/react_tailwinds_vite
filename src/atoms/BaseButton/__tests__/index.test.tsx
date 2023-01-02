import { describe, vi } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import BaseButton from '../BaseButton';

describe('<BaseButton />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseButton>Test</BaseButton>);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<BaseButton>Test</BaseButton>);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should render with data-test-id', () => {
    render(<BaseButton data-testid='test-BaseButton'>Test</BaseButton>);
    expect(screen.getByTestId('test-BaseButton')).toBeTruthy();
  });
});

describe('<BaseButton /> functionality', () => {
  it('should fire onClick if provided and clicked', () => {
    const onClick = vi.fn();
    render(<BaseButton onClick={onClick}>Test</BaseButton>);
    const button = screen.getByText('Test');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});

describe('<BaseButton /> styling', () => {
  it('should append any additional classnames provided', () => {
    render(<BaseButton className={'test'}>Test</BaseButton>);
    const button = screen.getByText('Test');
    expect(button.classList.contains('btn Test'));
  });
});

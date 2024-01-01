import { describe, expect, it , vi } from 'vitest';

import { render, screen , fireEvent} from '@testing-library/react';
import { PaginationButton } from '@/components/pagination/PaginationButton';


describe('PaginationButton', () => {
  it('renders a button with the correct classes', () => {
    const className = 'custom-class';
    render(<PaginationButton className={className}>Click me</PaginationButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass(className);
  });

  it('includes screen reader text when srText is provided', () => {
    const srText = 'Screen reader text';
    render(<PaginationButton srText={srText}>Click me</PaginationButton>);
    expect(screen.getByText(srText)).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    const text = 'Click me';
    render(<PaginationButton onClick={handleClick} >{text}</PaginationButton>);
    const button = screen.getByRole('button', { name: text });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

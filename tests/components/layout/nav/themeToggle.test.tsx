import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeToggle } from '@/components/layout/nav/ThemeToggle';

describe('ThemeToggle', () => {
    it('renders a theme toggle button', () => {
        render(<ThemeToggle />);

        const toggleButton = screen.getByRole('button', {
            name: 'Toggle theme',
        });
        expect(toggleButton).toBeInTheDocument();
    });
});

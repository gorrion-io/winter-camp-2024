import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
    it('renders a home page', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', { level: 1 });
        const linkToTask = screen.getByRole('link');

        expect(heading).toBeInTheDocument();

        expect(linkToTask).toBeInTheDocument();
        expect(linkToTask).toHaveAttribute('href', '/task/1');
        expect(linkToTask).toHaveTextContent('Come and meet the crew members!');
    });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Custom404 from '@/pages/404';

describe('404 Page', () => {
    test('renders 404 page with correct content', () => {
        render(<Custom404 />);

        const headerElement = screen.getByText('404');
        expect(headerElement).toBeInTheDocument();

        const subHeaderElement = screen.getByText(
            'Oops, your force is not strong enough.',
        );
        expect(subHeaderElement).toBeInTheDocument();

        const firstParagprah = screen.getByText(
            'This page you requested could not be found.',
        );
        expect(firstParagprah).toBeInTheDocument();

        const secondParagprah = screen.getByText('May the force be with you!');
        expect(secondParagprah).toBeInTheDocument();

        const linkToHomePage = screen.getByRole('link', { name: 'Back home' });
        expect(linkToHomePage).toBeInTheDocument();
        expect(linkToHomePage).toHaveAttribute('href', '/');
    });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CrewInformationError } from '@/components/errors/CrewInformationError';

describe('CrewInformationError', () => {
    test('renders error message correctly', () => {
        const newError = new Error('Test error message');
        render(<CrewInformationError error={newError} />);

        const errorHeading = screen.getByText('Ops... Something went wrong');
        const errorParagraph = screen.getByText(newError.message);

        expect(errorHeading).toBeInTheDocument();
        expect(errorParagraph).toBeInTheDocument();
    });

    test('displays "Back home" link', () => {
        render(<CrewInformationError error={null} />);

        const linkToHomePage = screen.getByRole('link', { name: 'Back home' });
        expect(linkToHomePage).toBeInTheDocument();
        expect(linkToHomePage).toHaveAttribute('href', '/');
    });

    test('displays "Try again" link', () => {
        render(<CrewInformationError error={null} />);

        const tryAgainLink = screen.getByRole('link', { name: 'Try again' });
        expect(tryAgainLink).toBeInTheDocument();
        expect(tryAgainLink).toHaveAttribute('href', '/task/1');
    });
});

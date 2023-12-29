import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Nav } from '@/components/layout/nav/Nav';

describe('Nav', () => {
	it('renders a navigation', () => {
		render(<Nav />);

		const homepageLink = screen.getByRole('link', { name: 'Winter camp 2024' });
		expect(homepageLink).toBeInTheDocument();
		expect(homepageLink).toHaveAttribute('href', '/');

		const linkToGithub = screen.getByRole('link', { name: '' });
		expect(linkToGithub).toBeInTheDocument();
		expect(linkToGithub).toHaveAttribute('href', 'https://github.com/sepetowski/winter-camp-2024');
	});
});

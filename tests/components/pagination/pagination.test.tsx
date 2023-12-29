import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Pagination } from '@/components/pagination/Pagination';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

jest.mock('@react-hook/media-query', () => ({
	useMediaQuery: jest.fn(),
}));

describe('Pagination', () => {
	it('renders a pagination component', () => {
		render(<Pagination currentPage={1} maxItems={32} />);

		const pagination = screen.getByRole('navigation');
		expect(pagination).toBeInTheDocument();

		jest.clearAllMocks();
	});

	it('renders a correct ammount of buttons', () => {
		render(<Pagination currentPage={1} maxItems={32} />);

		const btns = screen.getAllByRole('button');

		const paginatedBtns = btns.filter((btn) => Number(btn.textContent));

		expect(paginatedBtns).toHaveLength(3);

		jest.clearAllMocks();
	});

	it('should update pages when currentPage changes', () => {
		let activePage = 1;
		const { rerender } = render(<Pagination currentPage={activePage} maxItems={10} />);

		const currentActiveBtn = screen.getByRole('button', { name: activePage.toString() });
		expect(currentActiveBtn).toHaveAttribute('data-isActive', 'active');

		activePage = 2;
		rerender(<Pagination currentPage={activePage} maxItems={10} />);

		const nextCurrentActiveBtn = screen.getByRole('button', { name: activePage.toString() });
		expect(nextCurrentActiveBtn).toHaveAttribute('data-isActive', 'active');

		jest.clearAllMocks();
	});
});

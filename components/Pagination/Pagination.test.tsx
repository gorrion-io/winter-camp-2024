import React from 'react'
import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('Pagination component', () => {
	it('Renders pagination links correctly', () => {
		const paginationNumber = 4
		const mockPush = jest.fn()

		;(useRouter as jest.Mock).mockReturnValue({
			query: { page: '2' },
			push: mockPush,
		})

		render(<Pagination paginationNumber={paginationNumber} />)

		const paginationLinks = screen.getAllByRole('link')
		expect(paginationLinks).toHaveLength(paginationNumber)
	}),
		it('Highlights the active link parent correctly', () => {
			const paginationNumber = 4
			const mockPush = jest.fn()

			;(useRouter as jest.Mock).mockReturnValue({
				query: { page: '2' },
				push: mockPush,
			})

			render(<Pagination paginationNumber={paginationNumber} />)

			const activeLink = screen.getByText('2')
			const parentListItem = activeLink.parentElement

			if (parentListItem) {
				expect(parentListItem.classList.contains('text-blue-500')).toBe(true)
			} else {
				throw new Error('Parent list item is null')
			}
		})
})

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ErrorHandler from './ErrorHandler'

describe('ErrorHandler Component', () => {
	it('Renders error message', () => {
		const errorMessage = 'Failed to load data...'

		render(<ErrorHandler>{errorMessage}</ErrorHandler>)

		const errorElement = screen.queryByText(errorMessage)
		expect(errorElement).toBeInTheDocument()

		expect(errorElement).not.toBeNull()
	})
})

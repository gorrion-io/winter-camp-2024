import { CrewInformationLoading } from '@/components/crewInformation/CrewInformationLoading';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('CrewInformationLoading Component', () => {
	it('renders without crashing', () => {
		render(<CrewInformationLoading />);

		const svg = screen.getByTestId('crew-loader');
		expect(svg).toBeInTheDocument();
	});
});

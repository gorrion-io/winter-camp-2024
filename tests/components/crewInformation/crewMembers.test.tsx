import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CrewMembers } from '@/components/crewInformation/CrewMembers';

describe('CrewMembers Component', () => {
	const mockCrew = [
		{
			fullName: 'John Doe',
			age: 30,
			nationality: 'Spain',
			profession: 'astronaut',
		},
		{
			fullName: 'Jane Doe',
			age: 35,
			nationality: 'USA',
			profession: 'engineer',
		},
	];

	it('renders without crashing', () => {
		const { container } = render(<CrewMembers crew={mockCrew} />);

		expect(container).toBeInTheDocument();
	});
});

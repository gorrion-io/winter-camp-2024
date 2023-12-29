import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CrewMember } from '@/components/crewInformation/CrewMember';

describe('CrewMember Component', () => {
	const mockMember = {
		fullName: 'John Doe',
		age: 30,
		nationality: 'Spain',
		profession: 'astronaut',
	};

	it('renders with correct member details', () => {
		render(<CrewMember member={mockMember} />);

		const name = screen.getByText(mockMember.fullName);
		const age = screen.getByText(mockMember.age);
		const nationality = screen.getByText(mockMember.nationality);
		const profession = screen.getByText(mockMember.profession);

		expect(name).toBeInTheDocument();
		expect(name).toHaveTextContent(mockMember.fullName);

		expect(age).toBeInTheDocument();
		expect(age).toHaveTextContent(mockMember.age.toString());

		expect(nationality).toBeInTheDocument();
		expect(nationality).toHaveTextContent(mockMember.nationality);

		expect(profession).toBeInTheDocument();
		expect(profession).toHaveTextContent(mockMember.profession);
	});
});

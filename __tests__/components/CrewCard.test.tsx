import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CrewCard } from '@/components/crew-list/CrewCard';

describe('CrewCard', () => {
  it('displays crew member details', () => {
    const crewMember = {
      fullName: 'Jane Doe',
      age: 30,
      nationality: 'American',
      profession: 'Engineer',
    };

    render(<CrewCard {...crewMember} />);

    expect(screen.getByText('Full Name:')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Age:')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Nationality:')).toBeInTheDocument();
    expect(screen.getByText('American')).toBeInTheDocument();
    expect(screen.getByText('Profession:')).toBeInTheDocument();
    expect(screen.getByText('Engineer')).toBeInTheDocument();
  });
});

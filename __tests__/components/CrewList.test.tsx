import type { ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { CrewCard } from '@/components/crew-list/CrewCard';
import { CrewList } from '@/components/crew-list/CrewList';
import { render, screen } from '@testing-library/react';

type Props = ComponentProps<typeof CrewCard>;

vi.mock('@/components/crew-list/CrewCard', () => ({
  CrewCard: ({ fullName }: Props) => <div>{fullName}</div>,
}));

describe('CrewList', () => {
  it('renders a list of crew members', () => {
    const crewMembers = [
      {
        fullName: 'John Doe',
        age: 30,
        nationality: 'American',
        profession: 'Engineer',
      },
      {
        fullName: 'Jane Smith',
        age: 28,
        nationality: 'Canadian',
        profession: 'Pilot',
      },
    ];

    render(<CrewList crew={crewMembers} />);

    expect(screen.getAllByText(/John Doe|Jane Smith/)).toHaveLength(
      crewMembers.length,
    );
  });
});

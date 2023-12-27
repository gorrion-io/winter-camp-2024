'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { CrewResponse } from '@/types/crewResponse';

export const CrewMembers = () => {
	const { data: crewMembers, isLoading } = useQuery({
		queryFn: async () => {
			const res = await fetch(`/api/crew?page=1`);

			if (!res.ok)
				return {
					crewmates: [],
					crewAmmount: 0,
				};

			const data = await res.json();
			return data as CrewResponse;
		},

		queryKey: ['geCrewMembers'],
	});

	return <>crew members</>;
};

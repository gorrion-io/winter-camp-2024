'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CrewResponse } from '@/types/crewResponse';
import { useParams } from 'next/navigation';
import { LoadingState } from '../ui/loading-state';
import { CREWMATES_PER_PAGE } from '@/lib/constants';

export const CrewInformationContainer = () => {
	const params = useParams();
	const pageNumber = useMemo(() => {
		return params && params.page ? Number(params.page) : 1;
	}, [params]);

	const {
		data: crewInfomration,
		isLoading,
		error,
	} = useQuery({
		queryFn: async () => {
			const res = await fetch(`/api/crew?page=${pageNumber}`);

			if (!res.ok) return null;

			const data = (await res.json()) as CrewResponse;
			return data;
		},
		enabled: !!params,
		queryKey: ['geCrewInfomration', pageNumber],
	});

	console.log(crewInfomration);

	if (crewInfomration && crewInfomration?.crewAmmount < CREWMATES_PER_PAGE * pageNumber) {
		return null;
	}

	return <div className='mt-20'> {isLoading && <LoadingState />} crew members</div>;
};

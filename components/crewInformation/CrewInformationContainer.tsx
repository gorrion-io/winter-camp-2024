'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CrewResponse } from '@/types/crewResponse';
import { useParams } from 'next/navigation';
import { CREWMATES_PER_PAGE } from '@/lib/constants';
import { CrewMembers } from './CrewMembers';
import { CrewInformationLoading } from './CrewInformationLoading';
import { Pagination } from '@/components/pagination/Pagination';

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

			if (!res.ok)
				return {
					crewmates: [],
					crewAmmount: 0,
				};

			const data = (await res.json()) as CrewResponse;
			return data;
		},
		enabled: !!params,
		queryKey: ['geCrewInfomration', pageNumber],
	});

	if (crewInfomration && crewInfomration.crewAmmount < CREWMATES_PER_PAGE * pageNumber) {
		return null;
	}

	return (
		<>
			{isLoading ? (
				<CrewInformationLoading />
			) : (
				<>
					<CrewMembers crew={crewInfomration?.crewmates} />
					<Pagination currentPage={pageNumber} maxItems={crewInfomration?.crewAmmount ?? 0} />
				</>
			)}
		</>
	);
};

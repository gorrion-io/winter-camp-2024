'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CrewResponse, CrewResponseError } from '@/types/crewResponse';
import { useParams } from 'next/navigation';
import { CREWMATES_PER_PAGE } from '@/lib/constants';
import { CrewMembers } from './CrewMembers';
import { CrewInformationLoading } from './CrewInformationLoading';
import { Pagination } from '@/components/pagination/Pagination';
import { CrewInformationError } from '../errors/CrewInformationError';

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

			if (!res.ok) {
				const error = (await res.json()) as CrewResponseError;
				throw new Error(error.message);
			}

			const data = (await res.json()) as CrewResponse;

			return data;
		},
		enabled: !!params,
		queryKey: ['geCrewInfomration', pageNumber],
	});

	if (error) return <CrewInformationError error={error} />;
	return (
		<>
			{isLoading && !crewInfomration ? (
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

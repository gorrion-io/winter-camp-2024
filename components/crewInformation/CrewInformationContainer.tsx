'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { CrewMembers } from './CrewMembers';
import { CrewInformationLoading } from './CrewInformationLoading';
import { Pagination } from '@/components/pagination/Pagination';
import { CrewInformationError } from '../errors/CrewInformationError';
import { useGetCrew } from '@/hooks/useGetCrew';

export const CrewInformationContainer = () => {
	const params = useParams();
	const pageNumber = useMemo(() => {
		return params && params.page ? Number(params.page) : 1;
	}, [params]);

	const { data: crewInfomration, isLoading, error } = useGetCrew(pageNumber);

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

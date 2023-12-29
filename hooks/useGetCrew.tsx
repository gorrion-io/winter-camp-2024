'use client';
import { CrewResponse, CrewResponseError } from '@/types/crewResponse';
import { useQuery } from '@tanstack/react-query';

export const useGetCrew = (pageNumber: number) => {
    const result = useQuery({
        queryFn: async () => {
            const res = await fetch(`/api/crew?page=${pageNumber}`);

            if (!res.ok) {
                const error = (await res.json()) as CrewResponseError;
                throw new Error(error.message);
            }

            const data = (await res.json()) as CrewResponse;

            return data;
        },

        queryKey: ['geCrewInfomration', pageNumber],
    });

    return { ...result };
};

'use client';
import { CrewResponseSchema } from '@/schema/crew/crewResponseSchema';
import { CrewResponseError } from '@/types/crewResponse';
import { useQuery } from '@tanstack/react-query';

export const useGetCrew = (pageNumber: number) => {
    const result = useQuery({
        queryFn: async () => {
            const res = await fetch(`/api/crew?page=${pageNumber}`, {
                cache: 'no-cache',
            });

            if (!res.ok) {
                const error = (await res.json()) as CrewResponseError;
                throw new Error(error.message);
            }

            const data = (await res.json()) as CrewResponseSchema;

            return data;
        },

        queryKey: ['geCrewInfomration', pageNumber],
    });

    return { ...result };
};

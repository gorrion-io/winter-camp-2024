import { DEFAULT_TAKE_ITEMS } from '@/config/constants';
import { fetchApiData } from '@/lib/api/fetch-api-data';

interface GetCrewPayload {
  page?: number;
  take?: number;
}

export const getCrew = async ({
  page = 1,
  take = DEFAULT_TAKE_ITEMS,
}: GetCrewPayload) => {
  if (page <= 0 || isNaN(page) || isNaN(take)) return;
  const res = await fetchApiData({
    path: '/api/crew',
    query: {
      take,
      page,
    },
  });
  const result = await res.json();

  if (res.ok) return result as CrewResponse;
  throw Error(result.message || 'Something went wrong try again later.');
};

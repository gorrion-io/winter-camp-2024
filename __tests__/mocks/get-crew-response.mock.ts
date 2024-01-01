import { MEMBERS_MOCK_RESULT } from '@/__tests__/mocks/members.mock';
import { CREW_MEMBERS_PER_PAGE } from '@/config/constants';

export const GET_CREW_RESPONSE_MOCK_DATA: CrewResponse = {
  data: MEMBERS_MOCK_RESULT,
  pagination: {
    currentPage: 1,
    totalPages: Math.ceil(MEMBERS_MOCK_RESULT.length / CREW_MEMBERS_PER_PAGE),
    totalItems: MEMBERS_MOCK_RESULT.length,
    itemsPerPage: CREW_MEMBERS_PER_PAGE,
    lastPage: Math.ceil(MEMBERS_MOCK_RESULT.length / CREW_MEMBERS_PER_PAGE),
    previousPage: null,
    nextPage: null,
  },
};

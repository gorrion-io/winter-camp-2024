import { useRouter } from 'next/router';

import { getCrew } from '@/lib/api/get-crew';
import { parseToNumber } from '@/lib/utils/parse-to-number';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const usePagination = () => {
  const { query } = useRouter();
  const page = parseToNumber(query.page) || 1;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['crew', page],
    queryFn: () => getCrew({ page }),
    placeholderData: keepPreviousData,
  });
  return { data, isLoading, isError, error };
};

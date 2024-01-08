import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

type TanstackHookType<BodyType> = {
  url: string;
  queryKey: string;
  body: BodyType;
};

export const UseTanstackHook = <ApiDataType, BodyType>({
  url,
  queryKey,
  body,
}: TanstackHookType<BodyType>) => {
  const { isPending, error, data } = useQuery({
    queryKey: [queryKey, body],
    queryFn: async () => {
      const { data } = await axios.post<ApiDataType>(url, { page: body });
      return data;
    },
    placeholderData: keepPreviousData,
  });

  return {
    isPending,
    error,
    data,
  };
};

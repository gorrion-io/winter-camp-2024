import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TanstackHookType<BodyType> = {
  url: string;
  queryKey: string;
  body: BodyType;
};

export const UseTanstackFetchHook = <ApiDataType, BodyType>({
  url,
  queryKey,
  body,
}: TanstackHookType<BodyType>) => {
  console.log("body", body);

  const { isPending, error, data } = useQuery({
    queryKey: [queryKey, body],
    queryFn: async () => {
      const { data } = await axios.post<ApiDataType>(url, { data: body });
      return data;
    },
  });

  return {
    isPending,
    error,
    data,
  };
};

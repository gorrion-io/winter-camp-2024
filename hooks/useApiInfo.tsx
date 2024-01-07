import { Spinner } from "@/components/atoms/spinner/spinner";
import { apiDataType } from "@/types/api";

import { useRouter } from "next/router";

export const UseApiInfo = async (
  pathToBack: string,
  data: apiDataType | undefined,
  isPending: boolean,
  error: Error | null
) => {
  const { push } = useRouter();

  if (isPending) return <Spinner />;
  if (error || !data?.members.length || !data?.totalPage) {
    await push(pathToBack);
  }
};

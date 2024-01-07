import { Spinner } from "@/components/atoms/spinner/spinner";
import { useRouter } from "next/router";

export const UseBackRouter = async <T extends unknown[]>(
  pathToBack: string,
  data: T | undefined,
  error: Error | null,
  isPending: boolean
) => {
  const { push } = useRouter();

  if (isPending) return <Spinner />;

  if (error || !data?.length) {
    await push(pathToBack);
  }
};

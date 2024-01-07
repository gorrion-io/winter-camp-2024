import { useRouter } from "next/router";

export const UseBackRouter = (
  pathToBack: string,
  errorMessage: string | undefined
) => {
  const { push } = useRouter();
  push(pathToBack);
  throw new Error(errorMessage);
};

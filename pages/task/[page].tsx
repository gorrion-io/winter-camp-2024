/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { CrewResponse } from "@/types/crewMember";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import CrewTable from "@/components/crewTable";

export default function Task() {
  const router = useRouter();
  const page = router.query.page;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["crew", page],
    queryFn: async (): Promise<CrewResponse> => {
      const res = await fetch(`/api/crew?page=${page}`);
      if (!res.ok) throw new Error("Something went wrong!");

      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`${error}`}</div>;

  const crew = data!.paginatedCrewList;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <CrewTable crew={crew}></CrewTable>
    </div>
  );
}

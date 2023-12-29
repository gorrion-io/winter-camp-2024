/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { CrewResponse } from "@/types/crewMember";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import CrewTable from "@/components/crewTable";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export default function Task() {
  const router = useRouter();
  const page = router.query.page;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["crew", page],
    queryFn: async (): Promise<CrewResponse> => {
      const res = await fetch(`/api/crew?page=${page}`);
      if (!res.ok) throw new Error("Page not found!");

      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        <div>{`${error}`}</div>
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/task/1"
        >
          Go to page 1
        </Link>
      </div>
    );

  const crew = data!.paginatedCrewList;
  const totalItems = data!.originalListLength;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-300 mb-4 text-center pt-3">
        Space Crew
      </h1>
      <CrewTable crew={crew}></CrewTable>
      <Pagination totalItems={totalItems}></Pagination>
    </div>
  );
}

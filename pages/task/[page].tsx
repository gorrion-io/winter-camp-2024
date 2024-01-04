/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Task() {
  const router = useRouter();
  const pageIndex = router.query.page;

  const { data, isLoading, error } = useQuery({
    queryKey: ["crew", pageIndex],
    queryFn: async () => {
      const res = await fetch(`/api/crew?page=${pageIndex}`).then((res) => {
        if (!res.ok) throw new Error("Page not found!");
        return res.json();
      });

      return res;
    },
  });

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  if (error)
    return (
      <div>
        <h2> An error has occurred: {error.message}</h2>
      </div>
    );

  return (
    <div>
      <h2>Crew List</h2>
    </div>
  );
}

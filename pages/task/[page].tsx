/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { CircularPagination } from "@/components/CircularPagination/CircularPagination";
import { CrewMember } from "@/lib/types/crewTypes";
import { Card } from "@/components/Card/Card";

export default function Task() {
  const router = useRouter();
  const pageIndex = router.query.page;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["crew", pageIndex],
    queryFn: async () => {
      const res = await fetch(`/api/crew?page=${pageIndex}`).then((res) => {
        if (!res.ok) throw new Error("Page not found!");
        return res.json();
      });

      return res;
    },
  });

  if (isPending)
    return (
      <div className="flex place-items-center  place-content-center min-h-screen max-h-screen">
        <Head>
          <title>Crew list</title>
        </Head>
        <h2 className="text-3xl font-bold text-center">Loading...</h2>
      </div>
    );

  if (isError)
    return (
      <div className="flex place-items-center  place-content-center min-h-screen max-h-screen">
        <Head>
          <title>Crew list</title>
        </Head>
        <h2 className="text-3xl font-bold text-center">
          An error has occurred: {error.message}
        </h2>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col place-content-center place-items-center py-10">
      <Head>
        <title>Crew list</title>
      </Head>
      <div className="flex flex-col w-10/12 md:w-9/12 2xl:w-3/5 p-5 pb-6 np-effect rounded-lg overflow-hidden">
        <h2 className="text-4xl font-bold text-center uppercase text-[#F05454]">
          Crew List
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-6">
          {data.paginatedCrewList.map((member: CrewMember, index: number) => (
            <Card key={index} memberData={member} />
          ))}
        </div>
        <CircularPagination
          totalPages={data.totalPages}
          activePage={Number(pageIndex)}
        />
      </div>
    </div>
  );
}

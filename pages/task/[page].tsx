/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Card } from "@/components/molecules/Card/card";
import { Pagination } from "@/components/molecules/pagination/pagination";
import { UseTanstackFetchHook } from "@/hooks/useTanstackFetchData";
import { CrewMember } from "@/lib/type";
import { GridTemplate } from "@/templates/GridTemplate";

import { useCallback, useState } from "react";

type apiDataType = {
  members: CrewMember[];
  totalPage: number;
};

export default function Task() {
  const [page, setPage] = useState<number>(1);

  const { data, isPending, error } = useCallback(() => {
    return UseTanstackFetchHook<apiDataType, number>({
      url: "/api/crew",
      body: page,
      queryKey: "members",
    });
  }, [page])();

  if (isPending) return <div>Loading....</div>;
  if (error || !data) return <div>{error?.message}</div>;

  const { members, totalPage } = data;

  return (
    <div className="flex flex-col w-full min-h-screen place-content-center place-items-center p-4 md:p-24 bg-ecrue">
      <Pagination
        totalPageCount={totalPage}
        currentPage={page}
        setPage={setPage}
      />
      <GridTemplate>
        {members.map((member, i) => {
          return <Card key={i} id={i} member={member} />;
        })}
      </GridTemplate>
    </div>
  );
}

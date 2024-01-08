/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Spinner } from "@/components/atoms/spinner/spinner";
import { Card } from "@/components/molecules/Card/card";
import { InfoCard } from "@/components/molecules/InfoCard/Card/infoCard";
import { Pagination } from "@/components/molecules/pagination/pagination";
import { UseTanstackHook } from "@/hooks/useTanstackFetchData";
import { API_URL, QUERY_KEY } from "@/lib/constant/pagination";
import { GridTemplate } from "@/templates/GridTemplate";
import { ApiDataType } from "@/types/api";
import { useState } from "react";

export default function Task() {
  const [page, setPage] = useState<number>(1);

  const { data, isPending, error } = UseTanstackHook<ApiDataType, number>({
    url: API_URL,
    body: page,
    queryKey: QUERY_KEY,
  });

  if (isPending) return <Spinner />;

  if (error || !data?.members.length || !data.totalPage) {
    return <InfoCard message={error?.message} type="ERROR" />;
  }

  return (
    <div className="flex flex-col w-full min-h-screen place-content-center place-items-center p-4 md:p-24 bg-ecrue">
      <Pagination
        totalPageCount={data.totalPage}
        currentPage={page}
        setPage={setPage}
      />

      <GridTemplate>
        {data.members.map((member, i) => {
          return <Card key={i} id={i} member={member} />;
        })}
      </GridTemplate>
    </div>
  );
}

/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Button } from "@/components/atoms/button/button";
import { Spinner } from "@/components/atoms/spinner/spinner";
import { Typography } from "@/components/atoms/typography/typography";
import { Card } from "@/components/molecules/Card/card";
import { Pagination } from "@/components/molecules/pagination/pagination";
import { UseApiInfo } from "@/hooks/useApiInfo";
import { UseTanstackFetchHook } from "@/hooks/useTanstackFetchData";
import { API_URL, QUERY_KEY } from "@/lib/constant/pagination";
import { GridTemplate } from "@/templates/GridTemplate";
import { apiDataType } from "@/types/api";
import { useRouter } from "next/router";

import { useCallback, useState } from "react";

export default function Task() {
  const [page, setPage] = useState<number>(1);

  const { data, isPending, error } = useCallback(() => {
    return UseTanstackFetchHook<apiDataType, number>({
      url: API_URL,
      body: page,
      queryKey: QUERY_KEY,
    });
  }, [page])();

  UseApiInfo("/", data, isPending, error);

  return (
    <div className="flex flex-col w-full min-h-screen place-content-center place-items-center p-4 md:p-24 bg-ecrue">
      {data?.totalPage && (
        <Pagination
          totalPageCount={data?.totalPage}
          currentPage={page}
          setPage={setPage}
        />
      )}
      <GridTemplate>
        {data?.members.map((member, i) => {
          return <Card key={i} id={i} member={member} />;
        })}
      </GridTemplate>
    </div>
  );
}

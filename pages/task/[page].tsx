/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Pagination } from "@/components/pagination/Pagination";
import { CrewList } from "@/components/crew-list/CrewList";
import { getCrew } from "@/lib/api/get-crew";
import { parseToNumber } from "@/lib/utils/parse-to-number";
import { NextPageContext } from "next";

export const getServerSideProps = async ({
  query: { page },
}: NextPageContext) => {
  const parsedPage = parseToNumber(page);
  if (!parsedPage) return { notFound: true };
  const data = await getCrew({ page: parsedPage });
  return { props: data };
};

export default function Task({ data, pagination }: CrewResponse) {
  return (
    <div className="w-screen h-screen flex flex-col justify-around items-center overflow-hidden">
      <CrewList crew={data} />
      <Pagination {...pagination} />
    </div>
  );
}

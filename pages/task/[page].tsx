/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */
import { useRouter } from "next/router";
import { CrewMember } from "@/lib/crew";
import Link from "next/link";
import useSWR from "swr";
import Card from "@/components/Card";
import Button from "@/components/Button";

async function fetcher(
  url: string
): Promise<{ paginatedList: CrewMember[]; totalPages: number }> {
  const r = await fetch(url);
  return await r.json();
}

export default function Task() {
  const router = useRouter();

  const page = Number(router.query.page);
  const { data, error, isLoading } = useSWR(`/api/crew?page=${page}`, fetcher);
  if (isLoading)
    return (
      <div className="flex justify-center h-screen items-center text-2xl">
        Loading...
      </div>
    );
  if (!data?.paginatedList) return <div>No data</div>;
  if (page < 1 || page > data!.totalPages || isNaN(page)) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <span className="text-2xl font-bold">Page not found</span>
        <Button pageNumber={1} label="Go to page 1" />
      </div>
    );
  }
  if (error) return <div>Error: {error.message}</div>;
  return (
    <main className="m-4 mt-20">
      <ul className="flex gap-4 flex-wrap justify-center items-center">
        {data.paginatedList.map((member, idx) => {
          return <Card key={idx + 8 * (page - 1)} member={member} />;
        })}
      </ul>
      <section className="flex gap-4 justify-center mt-4">
        {Number(router.query.page) === 1 ? null : (
          <Button pageNumber={Number(router.query.page)} label="Previous" />
        )}
        {Number(router.query.page) === data.totalPages ? null : (
          <Button pageNumber={Number(router.query.page)} label="Next" />
        )}
      </section>
    </main>
  );
}

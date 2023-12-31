/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */
import { useRouter } from "next/router";
import useSWR from "swr";
import { CrewMember } from "@/lib/crew";
import Link from "next/link";

async function fetcher(
  url: string
): Promise<{ paginatedList: CrewMember[]; totalPages: number }> {
  const r = await fetch(url);
  return await r.json();
}

export default function Task() {
  const router = useRouter();
  const page = Number(router.query.page) || 1;
  const { data, error, isLoading } = useSWR(`/api/crew?page=${page}`, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data?.paginatedList) return <div>No data</div>;
  return (
    <>
      <ul>
        {data.paginatedList.map((member, idx) => {
          return (
            <li key={idx + 8 * (page - 1)}>
              <div>{`${member.fullName} ${member.age}`}</div>
              <div></div>
            </li>
          );
        })}
      </ul>
      <div>
        {Number(router.query.page) === 1 ? null : (
          <Link href={`/task/${Number(router.query.page) - 1}`}>Previous</Link>
        )}
        {Number(router.query.page) === data.totalPages ? null : (
          <Link href={`/task/${Number(router.query.page) + 1}`}>Next</Link>
        )}
      </div>
    </>
  );
}

/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */
import Link from "next/link";
import { Pagination } from "@/components/pagination/Pagination";
import { CrewList } from "@/components/crew-list/CrewList";
import { CrewLayout } from "@/components/CrewLayout";
import { LoadingIcon } from "@/components/icons/LoadingIcon";
import { usePagination } from "@/lib/hooks/usePagination";

export default function Task() {
  const { isLoading, isError, error, data } = usePagination();
  if (isError) return <ErrorComponent error={error} />;
  if (isLoading || !data) return <LoadingComponent />;

  const { data: crew, pagination } = data;
  return (
    <CrewLayout>
      <CrewList crew={crew} />
      <Pagination {...pagination} />
    </CrewLayout>
  );
}

const LoadingComponent = () => (
  <CrewLayout>
    <LoadingIcon className="size-36" />
  </CrewLayout>
);

const ErrorComponent = ({ error }: { error: Error | null }) => (
  <CrewLayout className="grid place-items-center">
    <section>
      <h2 className="text-3xl font-extrabold">Error</h2>
      <p className="italic">{error?.message}</p>
      <div className="flex place-items-center mt-12">
        <Link href="/">Go home</Link>
      </div>
    </section>
  </CrewLayout>
);

import CrewMemberCard from "@/components/CrewMemberCard/CrewMemberCard";
import ErrorAlert from "@/components/ErrorAlert";
import Pagination from "@/components/Pagination/Pagination";
import Spinner from "@/components/Spinner";
import { useCrewMembers } from "@/hooks/useCrewMembers";
import { fetchCrewMembers } from "@/lib/api/crewMembersApi";
import { CrewMember } from "@/lib/types/CrewMemberTypes";
import { PaginatedResponse } from "@/lib/types/PaginatedResponse";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import s from "./TaskPage.module.css";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const data = await fetchCrewMembers(Number(context.query.page) || 1);

    return {
      props: {
        crewMembers: data,
      },
    };
  } catch (error) {
    let errorMessage = "An error occurred while fetching data.";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return { props: { crewMembers: null, error: errorMessage } };
  }
};

type Props = {
  crewMembers: PaginatedResponse<CrewMember>;
  error?: string;
};

export default function Task({ crewMembers, error: serverError }: Props) {
  const router = useRouter();
  const { page } = router.query;

  const {
    data,
    error: clientError,
    isLoading,
  } = useCrewMembers(Number(page) || 1, crewMembers);

  const error = serverError || clientError?.message;

  const handlePageChange = (page: number) => {
    router.push(`/task/${page}`);
  };

  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center gap-4 bg-slate-950 p-4 md:gap-8 md:p-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-3xl font-bold tracking-wide">
          2024 Space Mission Crew Members 🚀
        </h1>

        {isLoading && <Spinner />}
        {error && <ErrorAlert text={error} />}
      </div>

      {data && (
        <>
          <ul
            className={`${s.crewList} grid max-h-full w-full max-w-[1096px] gap-6 overflow-auto`}
          >
            {data?.data.map((crewMember, index) => (
              <CrewMemberCard
                key={`${crewMember.fullName}-${index}`}
                crewMember={crewMember}
              />
            ))}
          </ul>

          <Pagination
            totalPages={data?.totalPages}
            currentPage={data.page}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

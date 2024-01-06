import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { CrewMember } from "../../types";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import PaginationButtons from "@/components/PaginationButtons";
import { useEffect } from "react";
import CrewMemberCard from "@/components/CrewMemberCard";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import CustomErrorPage from "../404";
import { fetchCrewMembers } from "@/lib/fetches";

const CrewPage = () => {
  const router = useRouter();
  const { page } = router.query;

  // get current page number params for paginating usage
  const pageNumber: number = page ? parseInt(page as string, 10) : 1;

  // handling fetching with react query
  const { data, isLoading, error } = useQuery({
    queryKey: ["crew", pageNumber],
    queryFn: () => fetchCrewMembers(pageNumber),
  });

  // calculate the required number of pages to accommodate all crew members
  const pageCount: number = Math.ceil(data?.fullCrew.length / ITEMS_PER_PAGE);

  // handling invalid path parameters
  useEffect(() => {
    // if user tries to anter a path param of this page that is not a number or is less than one, redirect the user to first page
    if (isNaN(pageNumber) || pageNumber < 1) {
      router.push(`/task/1`);
    }
    // if user tries to enter a page that goes beyond pagination, redirect the user to the maximum pagination page
    if (pageNumber > pageCount) {
      router.push(`/task/${pageCount}`);
    }
  }, [pageNumber, pageCount, router]);

  // if fetching data fails, display error page
  if (error) {
    return <CustomErrorPage />;
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-8 mx-auto my-12">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 transition hover:text-blue-500"
      >
        <FaHome className="text-2xl" />
        <span className="text-xl">Home</span>
      </Link>
      <h1 className="mb-4 text-4xl font-semibold text-center">
        Members of our crew
      </h1>
      {/* if is loading - display loader, if not - display fetched data  */}
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ">
          {data?.slicedCrew &&
            data.slicedCrew.map((member: CrewMember, index: number) => (
              <CrewMemberCard member={member} key={index} />
            ))}
        </div>
      )}
      {/* pagination buttons */}
      {<PaginationButtons pageCount={pageCount} pageNumber={pageNumber} />}
    </div>
  );
};

export default CrewPage;

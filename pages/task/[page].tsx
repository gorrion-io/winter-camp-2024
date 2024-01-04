import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { CrewMember } from "@/lib/definitions";
import Link from "next/link";
import MemberCard from "@/components/mui/MemberCard";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function CrewList() {
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const router = useRouter();

  const page = useMemo(
    () => parseInt(router.query?.page?.toString() || "1"),
    [router.query?.page]
  );

  const {
    data: crewData,
    error,
    isValidating,
  } = useSWR(`/api/crew?page=${page}`, fetcher);

  useEffect(() => {
    if (crewData?.collection?.length > 0) {
      setCrewMembers(crewData.collection);
      setTotalPages(crewData.totalPages);
    }
  }, [crewData]);

  useEffect(() => {
    if (error) {
      router.replace("/");
      router.reload();
    }
  }, [error, router]);

  return isValidating ? (
    <div className="w-screen h-screen flex justify-center">
      <p className="text-lg animate-pulse">Loading...</p>
    </div>
  ) : (
    <div className="opacity-100 transition-opacity duration-500 ease-in-out">
      <div className="w-10/12 md:w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 ">
        {crewMembers.map((member, index) => (
          <MemberCard crewMember={member} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/task/${i + 1}`}
            className={`mx-2 px-4 pt-2 pb-8 text-xl ${
              page === i + 1 ? "text-white" : "text-gray-500"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

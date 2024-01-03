import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CrewMember } from "@/lib/definitions";
import Link from "next/link";
import MemberCard from "@/components/mui/MemberCard";
import useSWR from "swr";
import { Skeleton } from "@mui/material";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch crew data");
  }
  const data = await response.json();
  return data;
};

export default function CrewList() {
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const { page } = router.query;

  const {
    data: crewData,
    error,
    isValidating,
  } = useSWR(`/api/crew?page=${page}`, fetcher);

  useEffect(() => {
    if (crewData) {
      setCrewMembers(crewData.collection || []);
      setTotalPages(crewData.totalPages || 1);
      setIsLoading(false);
    }
  }, [crewData]);

  useEffect(() => {
    if (error) {
      router.replace("/");
      router.reload();
    }
  }, [error, router]);

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center">
      <p className="text-lg">Loading...</p>
    </div>
  ) : (
    <div>
      <div className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-6">
        {crewMembers.map((member, index) => (
          <MemberCard crewMember={member} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/task/${i + 1}`}
            className="mx-2 px-4 pt-2 pb-8 text-grey-50 text-xl"
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

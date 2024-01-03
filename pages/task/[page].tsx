import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CrewMember } from "@/lib/definitions";
import Link from "next/link";
import MemberCard from "@/components/mui/MemberCard";

const CrewList = () => {
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [error, setError] = useState(null);

  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/crew?page=${page}`);
        if (!response.ok) {
          throw new Error("Failed to fetch crew data");
        }
        const data = await response.json();
        setCrewMembers(data["collection"]);
        setTotalPages(data["totalPages"]);
      } catch (error: any) {
        setError(error.message);
        router.replace("/");
        router.reload();
      }
    };

    fetchData();
  }, [page, router]);

  return (
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
            className="mx-2 px-4 py-2 text-grey-50 text-xl"
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrewList;

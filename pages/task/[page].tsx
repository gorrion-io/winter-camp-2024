import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CrewMember } from "@/lib/definitions";
import Link from "next/link";

const CrewList = () => {
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
  const [totalPages, setTotalPages] = useState<boolean>(false);

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
  }, [page]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Crew Members</h2>
      <ul>
        {crewMembers.map((member, index) => (
          <li key={index}>
            {member.fullName} {member.age}
          </li>
        ))}
      </ul>

      <Link href={`/task/${parseInt(page as string) + 1}`}>
        Następna strona
      </Link>

      {page && page !== "1" && (
        <Link href={`/task/${parseInt(page as string) - 1}`}>
          Poprzednia strona
        </Link>
      )}
    </div>
  );
};

export default CrewList;

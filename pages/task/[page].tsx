/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Card } from "@/components/molecules/Card/card";
import { Pagination } from "@/components/molecules/pagination/pagination";
import { CrewMember } from "@/lib/type";

import { useState } from "react";

export default function Task() {
  const [members, setMembers] = useState<{
    members: CrewMember[];
    totalPage: number;
  }>({ members: [], totalPage: 4 });

  const getTeamMembers = async (page: number) => {
    try {
      const res = await fetch("/api/crew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page,
        }),
      });
      setMembers(await res.json());
    } catch (error) {
      throw new Error("There was a problem with downloading data");
    }
  };
  console.log("members", members);
  return (
    <div className="flex flex-col min-h-screen place-content-center border-2 border-red-500 place-items-center p-24 bg-ecrue">
      {members.members?.length
        ? members.members.map((member, i) => {
            return <Card key={i} id={i} member={member} />;
          })
        : ""}
      <Pagination pageAmount={members.totalPage} setPage={getTeamMembers} />
    </div>
  );
}

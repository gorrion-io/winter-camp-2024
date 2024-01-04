/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Card } from "@/components/molecules/Card/card";
import { Pagination } from "@/components/molecules/pagination/pagination";
import { CrewMember } from "@/lib/type";
import { GridTemplate } from "@/templates/GridTemplate";

import { useState } from "react";

export default function Task() {
  const [apiData, setApiData] = useState<{
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
      setApiData(await res.json());
    } catch (error) {
      throw new Error("There was a problem with downloading data");
    }
  };
  return (
    <div className="flex flex-col w-full min-h-screen place-content-center place-items-center p-4 md:p-24 bg-ecrue">
      <GridTemplate>
        {apiData.members?.length
          ? apiData.members.map((member, i) => {
              return <Card key={i} id={i} member={member} />;
            })
          : ""}
      </GridTemplate>
      <Pagination pageAmount={apiData.totalPage} setPage={getTeamMembers} />
    </div>
  );
}

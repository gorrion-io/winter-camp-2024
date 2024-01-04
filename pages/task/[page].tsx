/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { Button } from "@/components/atoms/button/button";
import { Typography } from "@/components/atoms/typography/typography";
import { Pagination } from "@/components/molecules/pagination/pagination";

import { useState } from "react";

export default function Task() {
  const [page, setPage] = useState<number>(1);
  const [members, setMembers] = useState<any>(null);

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
    <div className="flex flex-col min-h-screen place-content-center place-items-center p-24 bg-ecrue">
      <Pagination pageAmount={8} />
    </div>
  );
}

/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { useState } from "react";

export default function Task() {
  const [page, setPage] = useState<number>(1);
  const [members, setMembers] = useState<[]>([]);

  const getTeamMembers = async (page: number) => {
    try {
      const res = await fetch("/api/crew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(page),
      });
      setMembers(await res.json());
    } catch (error) {
      throw new Error("There was a problem with downloading data");
    }
  };
  console.log("members", members);
  return <button onClick={() => getTeamMembers(page)}>Task</button>;
}

import { CrewMember } from "../types/CrewMemberTypes";
import { PaginatedResponse } from "../types/PaginatedResponse";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const fetchCrewMembers = async (
  page = 1,
): Promise<PaginatedResponse<CrewMember>> => {
  const res = await fetch(`${BASE_URL}/crew?page=${page}`);
  const body = await res.json();

  if (!res.ok) {
    throw new Error(
      body?.message || `Failed to fetch data. Status code: ${res.status}`,
    );
  }

  return body;
};

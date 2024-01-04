import { useQuery } from "@tanstack/react-query";
import { fetchCrewMembers } from "@/lib/api/crewMembersApi";
import { PaginatedResponse } from "@/lib/types/PaginatedResponse";
import { CrewMember } from "@/lib/types/CrewMemberTypes";

export const useCrewMembers = (
  page: number,
  initialData: PaginatedResponse<CrewMember>,
) => {
  return useQuery<PaginatedResponse<CrewMember>>({
    queryKey: ["crewMembers", page],
    queryFn: () => fetchCrewMembers(page),
    initialData,
  });
};

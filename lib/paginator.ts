import { PageRequest, Page, CrewMember } from "./models";

export function paginate(
  pageRequest: PageRequest,
  crewMembers: CrewMember[]
): Page<CrewMember> {
  const { page, size } = pageRequest;

  const start = (page - 1) * size;
  const end = start + size;

  const totalSize = crewMembers.length;
  const pages =
    totalSize % size === 0 ? totalSize / size : Math.ceil(totalSize / size);

  const paginatedCrewMembers = crewMembers.slice(start, end);

  const pageResult: Page<CrewMember> = {
    page,
    size,
    pages,
    totalSize,
    elements: paginatedCrewMembers,
  };

  return pageResult;
}

import { sortMembersByName } from "../crew";
import { CrewMember } from "../type";
import { MEMBER_PER_PAGE } from "../constant/pagination";

export const calculateTotalPage = (
  memberPerPage: number,
  dataLength: number
) => {
  return Math.ceil(dataLength / memberPerPage);
};

export const calculateOffset = (pageOffset: number, memberPerPage: number) => {
  const startIndex = (pageOffset - 1) * memberPerPage;
  const endIndex = startIndex + memberPerPage;
  return {
    startIndex,
    endIndex,
  };
};

export const getMembersPerPage = (
  memberPerPage: number,
  pageOffset: number,
  members: CrewMember[]
) => {
  const { startIndex, endIndex } = calculateOffset(pageOffset, memberPerPage);
  return members.slice(startIndex, endIndex);
};

export const getPaginationData = (
  pageOffset: number,
  members: CrewMember[]
) => {
  const newMembers = getMembersPerPage(MEMBER_PER_PAGE, pageOffset, members);
  const totalPage = calculateTotalPage(MEMBER_PER_PAGE, members.length);
  const sortedMembers = sortMembersByName(newMembers);

  return {
    members: sortedMembers,
    totalPage,
  };
};

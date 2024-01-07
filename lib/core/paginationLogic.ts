import { sortMembersByName } from "../crew";
import { CrewMember } from "../type";

import { MEMBER_PER_PAGE } from "../constant/pagination";

export const calculateTotalPage = (dataLength: number) => {
  return Math.ceil(dataLength / MEMBER_PER_PAGE);
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
  pageOffset: number,
  members: CrewMember[]
) => {
  const { startIndex, endIndex } = calculateOffset(pageOffset, MEMBER_PER_PAGE);
  return members.slice(startIndex, endIndex);
};

export const getPaginationData = (
  pageOffset: number,
  members: CrewMember[]
) => {
  const newMembers = getMembersPerPage(pageOffset, members);
  const totalPage = calculateTotalPage(members.length);
  const sortedMembers = sortMembersByName(newMembers);

  return {
    members: sortedMembers,
    totalPage,
  };
};

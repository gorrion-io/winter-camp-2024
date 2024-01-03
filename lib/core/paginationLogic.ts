import { sortMembersByName } from "../crew";
import { CrewMember } from "../type";

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
  memberPerPage: number,
  pageOffset: number,
  members: CrewMember[]
) => {
  const newMembers = getMembersPerPage(
    memberPerPage,
    (pageOffset = 1),
    members
  );
  const totalPage = calculateTotalPage(memberPerPage, members.length);
  const sortedMembers = sortMembersByName(newMembers);

  return {
    sortedMembers,
    totalPage,
  };
};

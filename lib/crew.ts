/**
 * @format
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { CrewMember } from "@/models/CrewMembers";
import { MEMBERS_ON_PAGE, PATHS_TO_FILES } from "./constatnts";
import { getLocalData } from "./getMockData";

export const getCrewMembers = (page: number) =>
	getLocalData(PATHS_TO_FILES).then((data) => {
		const filteredMembers = data.filter((item: CrewMember) => item.age >= 30 && item.age <= 40);

		const membersOnPage = filteredMembers.slice(
			(page - 1) * MEMBERS_ON_PAGE,
			page * MEMBERS_ON_PAGE
		);

		return { membersOnPage, countMembers: filteredMembers.length };
	});

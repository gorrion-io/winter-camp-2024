/** @format */

import { CrewMember } from "@/models/CrewMembers";

export const sortAlphabeticOrder = (objectData: CrewMember[]) =>
	objectData.sort(function (a, b) {
		if (a.fullName < b.fullName) {
			return -1;
		}
		if (a.fullName > b.fullName) {
			return 1;
		}
		return 0;
	});

import { CrewMemberType } from '../types/crewTypes'

export const filterAndSortCrewArray = (combinedCrewArray: CrewMemberType[]) => {
	const minAge = 30
	const maxAge = 40

	const filteredCrewArray = combinedCrewArray.filter(crewMember => crewMember.age >= minAge && crewMember.age <= maxAge)

	filteredCrewArray.sort((a, b) => {
		const nameA = a.fullName.toLowerCase()
		const nameB = b.fullName.toLowerCase()

		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})

	return filteredCrewArray
}

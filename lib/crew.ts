import { JsonCrewMemberType, YamlCrewMemberType } from '../types/crewTypes'
import { transformCrewJsonArray, transformCrewYamlArray } from './transformCrewArrays'
import { filterAndSortCrewArray } from './filterAndSortCrewArray'

export const filterFetchedArrays = (jsonCrewData: JsonCrewMemberType[], yamlCrewData: YamlCrewMemberType[]) => {
	const transformedJsonCrewData = transformCrewJsonArray(jsonCrewData)
	const transformemYamlCrewData = transformCrewYamlArray(yamlCrewData)

	const combinedCrewArray = [...transformedJsonCrewData, ...transformemYamlCrewData]

	const filteredCrewArray = filterAndSortCrewArray(combinedCrewArray)

	return filteredCrewArray
}

/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

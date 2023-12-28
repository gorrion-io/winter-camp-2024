import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { JSON_CREW_PATH, YAML_CREW_PATH } from '../constants/fetchCrewConst'

export const fetchCrewJsonData = () => {
	try {
		const jsonFilePath = path.join(process.cwd(), JSON_CREW_PATH)
		const jsonData = fs.readFileSync(jsonFilePath, 'utf-8')
		const parsedCrewJsonData = JSON.parse(jsonData)

		return parsedCrewJsonData
	} catch (error) {
		throw new Error('Error fetching JSON data')
	}
}

export const fetchCrewYamlData = () => {
	try {
		const yamlFilePath = path.join(process.cwd(), YAML_CREW_PATH)
		const yamlData = fs.readFileSync(yamlFilePath, 'utf-8')
		const parsedCrewYamlData = yaml.load(yamlData)

		return parsedCrewYamlData
	} catch (error) {
		throw new Error('Error fetching YAML data')
	}
}

// WHEN DATA ON SOME SERVER WITH PAGE HANDLING

// export const fetchCrewJsonData = ({ page }) => {
// 	const jsonUrlPath = `JSON_CREW_PATH?${page}`

// 	fetch(jsonUrlPath)
// 		.then(res => res.json())
// 		.then(res => {
// 			if (res.ok) {
// 				return res
// 			} else {
// 				throw new Error('Error fetching JSON data')
// 			}
// 		})
// }

// export const fetchYamlJsonData = ({ page }) => {
// 	const yamlUrlPath = `YAML_CREW_PATH?${page}`

// 	fetch(yamlUrlPath)
// 		.then(res => res.json())
// 		.then(res => {
// 			if (res.ok) {
// 				return res
// 			} else {
// 				throw new Error('Error fetching YAML data')
// 			}
// 		})
// }

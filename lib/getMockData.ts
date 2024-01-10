/** @format */

import fs from "fs";
import yaml from "js-yaml";
import { sortAlphabeticOrder } from "./sortAlphabeticOrder";
import { CrewMember, JsonFileType, YamlFileType } from "@/models/CrewMembers";

export async function getLocalData(paths: string[]): Promise<CrewMember[]> {
	let objectData: CrewMember[] = [];

	paths.forEach((filePath) => {
		const extension = filePath.split(".").pop();

		const file = fs.readFileSync(`./${filePath}`, "utf8");

		let parsedData = [];
		let transformedObject: CrewMember[] = [];

		switch (extension) {
			case "json":
				parsedData = JSON.parse(file) as JsonFileType[];

				transformedObject = parsedData.map(
					({ firstName, lastName, nationality, age, profession }) => ({
						fullName: `${firstName} ${lastName}`,
						nationality,
						age,
						profession,
					})
				);

				objectData = [...objectData, ...transformedObject];

				break;

			case "yaml":
				parsedData = yaml.load(file) as YamlFileType[];

				transformedObject = parsedData.map(({ name, nationality, years_old, occupation }) => ({
					fullName: name,
					nationality,
					age: years_old,
					profession: occupation,
				}));

				objectData = [...objectData, ...transformedObject];

				break;
			default:
				throw new Error("Unsupported file extension");
		}
	});
	return sortAlphabeticOrder(objectData);
}

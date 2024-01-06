import path from "path";
import {
  loadJsonCrewDataFromFile,
  loadYamlCrewDataFromFile,
} from "../lib/fileUtils";
import { JsonCrewMember, YamlCrewMember } from "@/types";

// check if it loads data from json files
describe("loadJsonCrewDataFromFile", () => {
  it("should load JSON data from file correctly", async () => {
    const jsonCrewPath = path.resolve(__dirname, "../crew.json");

    const result = await loadJsonCrewDataFromFile(jsonCrewPath);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true); // check if uploaded data is array
    // check if uploaded data is of the correct type
    result.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining<JsonCrewMember>({
          firstName: expect.any(String),
          lastName: expect.any(String),
          nationality: expect.any(String),
          age: expect.any(Number),
          profession: expect.any(String),
        })
      );
    });
  });
});

// check if it loads data from yaml file
describe("loadYamlCrewDataFromFile", () => {
  it("should load YAML data from file correctly", async () => {
    const yamlCrewPath = path.resolve(__dirname, "../crew.yaml");

    const result = await loadYamlCrewDataFromFile(yamlCrewPath);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true); // check if uploaded data is array
    // check if uploaded data is of the correct type
    result.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining<YamlCrewMember>({
          name: expect.any(String),
          nationality: expect.any(String),
          years_old: expect.any(Number),
          occupation: expect.any(String),
        })
      );
    });
  });
});

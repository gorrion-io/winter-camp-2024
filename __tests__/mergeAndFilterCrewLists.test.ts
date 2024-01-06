import { mergeAndFilterCrewLists } from "@/lib/crew";
import { CrewMember } from "@/types";
import path from "path";

describe("mergeAndFilterCrewLists", () => {
  it("should merge, filter and sort crew lists correctly", async () => {
    // creating absolute paths to make sure that no matter what folder the test is run from, the paths will be correct
    const jsonCrewPath = path.resolve(__dirname, "../crew.json");
    const yamlCrewPath = path.resolve(__dirname, "../crew.yaml");

    // merging and filtering json crew and yaml crew
    const result: CrewMember[] = await mergeAndFilterCrewLists(
      jsonCrewPath,
      yamlCrewPath
    );

    // check if the result is an array
    expect(Array.isArray(result)).toBe(true);

    // check if the result is not empty
    expect(result.length).toBeGreaterThan(0);

    // check if all members are within the age range
    const allMembersWithinAgeRange = result.every(
      (member) => member.age >= 30 && member.age <= 40
    );
    expect(allMembersWithinAgeRange).toBe(true);

    // copy the original result array and sort it alphabetically
    const sortedResult = [...result].sort((a, b) =>
      a.fullName.localeCompare(b.fullName)
    );

    // check if the sorted array is equal to the original array
    expect(result).toEqual(sortedResult);
  });
});

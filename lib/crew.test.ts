import { getFilteredCrewMembers } from "./crew";
import { JsonCrewMember, YamlCrewMember } from "./types/CrewMemberTypes";
import parseJsonFile from "./utils/jsonFileParser";
import parseYamlFile from "./utils/yamlFileParser";

jest.mock("./utils/jsonFileParser");
jest.mock("./utils/yamlFileParser");

describe("getFilteredCrewMembers", () => {
  beforeAll(() => {
    const MOCK_JSON_DATA: JsonCrewMember[] = [
      {
        firstName: "John",
        lastName: "Doe",
        nationality: "UK",
        age: 35,
        profession: "Engineer",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        nationality: "British",
        age: 28,
        profession: "Astronaut",
      },
    ];

    const MOCK_YAML_DATA: YamlCrewMember[] = [
      {
        name: "Alice Johnson",
        nationality: "Canada",
        years_old: 40,
        occupation: "Doctor",
      },
      {
        name: "Bob Brown",
        nationality: "Australian",
        years_old: 45,
        occupation: "Astronaut",
      },
    ];

    (parseJsonFile as jest.Mock).mockResolvedValue(MOCK_JSON_DATA);
    (parseYamlFile as jest.Mock).mockResolvedValue(MOCK_YAML_DATA);
  });

  it("should return a list of crew members between 30 and 40 years old, sorted by fullName", async () => {
    const result = await getFilteredCrewMembers();

    expect(result).toEqual([
      {
        fullName: "Alice Johnson",
        nationality: "Canada",
        age: 40,
        profession: "Doctor",
      },
      {
        fullName: "John Doe",
        nationality: "UK",
        age: 35,
        profession: "Engineer",
      },
    ]);
  });
});

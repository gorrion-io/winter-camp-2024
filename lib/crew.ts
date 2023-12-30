/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */
import fs from "fs";
import yaml from "js-yaml";

type JsonMember = {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;
  profession: string;
};

type YamlMember = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: string;
};

type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

const chosenCrew: () => Promise<CrewMember[]> = async () => {
  const dataPath = process.cwd();
  const file = await fs.promises.readFile(dataPath + "/crew.json", "utf8");
  const jsonMembers: JsonMember[] = await JSON.parse(file);

  const crewMembers: CrewMember[] = jsonMembers.map((member) => {
    const mappedMember: CrewMember = {
      age: member.age,
      fullName: `${member.firstName} ${member.lastName}`,
      nationality: member.nationality,
      profession: member.profession,
    };
    return mappedMember;
  });
  try {
    const yamlMembers = yaml.load(
      fs.readFileSync(dataPath + "/crew.yaml", "utf8")
    ) as YamlMember[];
    yamlMembers.forEach((member) => {
      const mappedMember: CrewMember = {
        age: member.years_old,
        fullName: member.name,
        nationality: member.nationality,
        profession: member.occupation,
      };
      crewMembers.push(mappedMember);
    });
  } catch (e) {
    console.log(e);
  }
  return crewMembers.filter((member) => member.age >= 30 && member.age <= 40);
};
export default chosenCrew;

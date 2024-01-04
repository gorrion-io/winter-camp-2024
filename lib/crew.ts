/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */
export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

interface ICrewMemberJSON {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;
  profession: string;
}
interface ICrewMemberYAML {
  name: string;
  nationality: string;
  years_old: number;
  occupation: string;
}

// mozna stworzyć klasę z metodami statycznymi np. CrewMemberHandler jeżeli będzie potrzeba dodania nowych funkcji do obsługi członków zespołu
export const joinLists = (...lists: CrewMember[][]): CrewMember[] => {
  const joinedLists = lists.reduce((acc, currentValue) => {
    acc.push(...currentValue);
    return acc;
  }, []);
  return joinedLists;
};

export const chooseMembersWithRighAgeYAML = (crewList: ICrewMemberYAML[]): CrewMember[] => {
  const membersWithRighAge = crewList.filter(
    (crewMember) => crewMember.years_old >= 30 && crewMember.years_old <= 40
  );
  const formattedMembers = membersWithRighAge.map((crewMember) => {
    const { name, nationality, years_old, occupation } = crewMember;

    return {
      fullName: name,
      nationality,
      age: years_old,
      profession: occupation,
    };
  });

  return formattedMembers;
};
export const chooseMembersWithRighAgeJSON = (crewList: ICrewMemberJSON[]): CrewMember[] => {
  const membersWithRighAge = crewList.filter(
    (crewMember) => crewMember.age >= 30 && crewMember.age <= 40
  );
  const formattedMembers = membersWithRighAge.map((crewMember) => {
    const { firstName, lastName, nationality, age, profession } = crewMember;

    return {
      fullName: `${firstName} ${lastName}`,
      nationality,
      age,
      profession,
    };
  });

  return formattedMembers;
};
export const paginateArray = (
  dataEntries: unknown[],
  settings: { actualPageIndex: number; entriesOnPage: number }
) => {
  const { actualPageIndex, entriesOnPage } = settings;
  const doesPageExist = actualPageIndex > dataEntries.length / entriesOnPage;
  if (doesPageExist) throw new Error('This page doesn`t exist');

  const dividedEntriesIntoGroups = [];
  const modifiedDataArray = [...dataEntries];
  while (modifiedDataArray.length) {
    dividedEntriesIntoGroups.push(modifiedDataArray.splice(0, entriesOnPage));
  }
  const entriesOnAcualPage = dividedEntriesIntoGroups[actualPageIndex];
  return entriesOnAcualPage;
};

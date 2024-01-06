export type CrewMember = {
    fullName: string;
    nationality: string;
    age: number;
    profession: string;
  };
  
  export type JsonCrewMember = {
    firstName: string;
    lastName: string;
    nationality: string;
    age: 35;
    profession: string;
  };
  
  export type YamlCrewMember = {
    name: string;
    nationality: string;
    years_old: number;
    occupation: string;
  }
  
  export type ApiResponse = {
    fullCrew: CrewMember[];
    slicedCrew: CrewMember[];
  };
  
  export type ApiError = {
    error: string;
  };
  
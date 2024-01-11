import { BrowseDto } from "@/api/dto/BrowseDto";
import { CrewMember } from "@/lib/definitions";
import { describe, expect } from "@jest/globals";

describe("BrowseDto paginate method", () => {
  it("should paginate the collection correctly", () => {
    const totalPages = 5;
    const browseDto = new BrowseDto<CrewMember>(crewArray, totalPages);

    const page = 2;
    const itemsPerPage = 3;
    const result = browseDto.paginate(page, itemsPerPage);

    const expectedArray = [
      {
        fullName: "Emily Johnson",
        nationality: "Canadian",
        age: 32,
        profession: "Mechanic",
      },
      {
        fullName: "Michael Lee",
        nationality: "Australian",
        age: 40,
        profession: "Radio Operator",
      },
      {
        fullName: "Sophia Kim",
        nationality: "South Korean",
        age: 37,
        profession: "Cook",
      },
    ];
    expect(result.collection).toEqual(expectedArray);
    expect(result.totalPages).toBe(totalPages);
  });

  it("should handle pagination for the last page", () => {
    const totalPages = 5;
    const browseDto = new BrowseDto<CrewMember>(crewArray, totalPages);

    const page = 5;
    const itemsPerPage = 3;
    const result = browseDto.paginate(page, itemsPerPage);

    const expectedArray = [
      {
        fullName: "Vladimir Ivanov",
        nationality: "Russian",
        age: 38,
        profession: "Astrophysicist",
      },
    ];

    expect(result.collection).toEqual(expectedArray);
    expect(result.totalPages).toBe(totalPages);
  });
});

const crewArray = [
  {
    fullName: "John Doe",
    nationality: "American",
    age: 30,
    profession: "Pilot",
  },
  {
    fullName: "Jane Smith",
    nationality: "British",
    age: 38,
    profession: "Engineer",
  },
  {
    fullName: "Carlos Rodriguez",
    nationality: "Spanish",
    age: 35,
    profession: "Navigator",
  },
  {
    fullName: "Emily Johnson",
    nationality: "Canadian",
    age: 32,
    profession: "Mechanic",
  },
  {
    fullName: "Michael Lee",
    nationality: "Australian",
    age: 40,
    profession: "Radio Operator",
  },
  {
    fullName: "Sophia Kim",
    nationality: "South Korean",
    age: 37,
    profession: "Cook",
  },
  {
    fullName: "Ahmed Ali",
    nationality: "Egyptian",
    age: 34,
    profession: "Communications Officer",
  },
  {
    fullName: "Luisa Fernandez",
    nationality: "Mexican",
    age: 31,
    profession: "Medical Officer",
  },
  {
    fullName: "Yuki Tanaka",
    nationality: "Japanese",
    age: 39,
    profession: "Security Officer",
  },
  {
    fullName: "Anita Patel",
    nationality: "Indian",
    age: 33,
    profession: "Biologist",
  },
  {
    fullName: "Alexandre Dupont",
    nationality: "French",
    age: 36,
    profession: "Geologist",
  },
  {
    fullName: "Isabella Costa",
    nationality: "Brazilian",
    age: 35,
    profession: "Meteorologist",
  },
  {
    fullName: "Vladimir Ivanov",
    nationality: "Russian",
    age: 38,
    profession: "Astrophysicist",
  },
];

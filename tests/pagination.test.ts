import { PageRequest, Page, CrewMember } from "../lib/models";
import { paginate } from "../lib/paginator";

describe("paginate with data", () => {
  const sampleCrewMembers: CrewMember[] = [
    {
      fullName: "Mohammed Abdul",
      nationality: "Saudi Arabia",
      age: 38,
      profession: "doctor",
    },
    {
      fullName: "Mia Kim",
      nationality: "South Korea",
      age: 30,
      profession: "engineer",
    },
    {
      fullName: "Lucas Ferreira",
      nationality: "Brazil",
      age: 32,
      profession: "astronaut",
    },
  ];

  it("should paginate crew members for 1 elements", () => {
    const pageRequest: PageRequest = { page: 1, size: 1 };
    const paginatedResult: Page<CrewMember> = paginate(
      pageRequest,
      sampleCrewMembers
    );

    expect(paginatedResult.page).toBe(1);
    expect(paginatedResult.size).toBe(1);
    expect(paginatedResult.totalSize).toBe(sampleCrewMembers.length);
    expect(paginatedResult.pages).toBe(3);
    expect(paginatedResult.elements).toHaveLength(1);
  });

  it("should paginate crew members for 3 elements", () => {
    const pageRequest: PageRequest = { page: 1, size: 3 };
    const paginatedResult: Page<CrewMember> = paginate(
      pageRequest,
      sampleCrewMembers
    );

    expect(paginatedResult.page).toBe(1);
    expect(paginatedResult.size).toBe(3);
    expect(paginatedResult.totalSize).toBe(sampleCrewMembers.length);
    expect(paginatedResult.pages).toBe(1);
    expect(paginatedResult.elements).toHaveLength(3);
  });
});

describe("paginate without data", () => {
  it("should return empty page", () => {
    const pageRequest: PageRequest = { page: 1, size: 3 };
    const paginatedResult: Page<CrewMember> = paginate(pageRequest, []);

    expect(paginatedResult.page).toBe(1);
    expect(paginatedResult.size).toBe(3);
    expect(paginatedResult.totalSize).toBe(0);
    expect(paginatedResult.pages).toBe(0);
    expect(paginatedResult.elements).toHaveLength(0);
  });
});

// fetching data from API endpoint
export const fetchCrewMembers = async (page: number) => {
    const response = await fetch(`/api/crew?page=${page}`);
    if (!response.ok) {
      throw new Error("Failed to fetch crew members");
    }
    return response.json();
  };
  
  
  
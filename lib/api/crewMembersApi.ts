const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const fetchCrewMembers = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/crew?page=${page}`);
  const body = await res.json();

  if (!res.ok) {
    throw new Error(
      body?.message || `Failed to fetch data. Status code: ${res.status}`,
    );
  }

  return body;
};

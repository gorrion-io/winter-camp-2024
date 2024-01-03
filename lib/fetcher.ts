export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch crew data");
  }
  const data = await response.json();
  return data;
};

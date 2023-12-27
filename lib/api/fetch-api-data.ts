interface FetchOptions extends Omit<RequestInit, "method"> {
  path: string;
  query?: Record<string, any>;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}

export const fetchApiData = async ({
  path,
  headers,
  query,
  method = "GET",
  ...fetchOptions
}: FetchOptions) => {
  const queryStr = new URLSearchParams(query).toString();
  const url = `${path}${queryStr ? `?${queryStr}` : ""}`;
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...fetchOptions,
  });
};

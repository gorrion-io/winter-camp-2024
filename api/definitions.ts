export type ActionResult<T> = T | { error: string };
export type Query = { [key: string]: string | string[] | undefined };

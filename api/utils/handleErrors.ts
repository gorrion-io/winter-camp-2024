import { MethodNotAllowedError } from "@/api/exceptions/MethodNotAllowedError";
import { ValidationError } from "@/api/exceptions/ValidationError";

import { NextApiResponse } from "next";

export function handleErrors<T>(
  res: NextApiResponse<T | { error: string }>,
  error: any
) {
  if (error instanceof ValidationError) {
    return res.status(400).json({ error: error.message });
  }
  if (error instanceof MethodNotAllowedError) {
    return res.status(405).json({ error: error.message });
  }
  return res.status(500).json({ error: "Internal Server Error" });
}

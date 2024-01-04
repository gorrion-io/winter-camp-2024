import { MethodNotAllowedError } from "@/api/exceptions/MethodNotAllowedError";
import { NextApiRequest } from "next";

export type AllowedMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function validateMethod(
  req: NextApiRequest,
  AllowedMethods: AllowedMethods[]
) {
  const method = req.method?.toUpperCase() as AllowedMethods;
  if (!AllowedMethods.includes(method)) {
    throw new MethodNotAllowedError();
  }
}

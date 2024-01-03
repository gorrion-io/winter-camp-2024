import { MethodNotAllowedError } from "@/api/exceptions/MethodNotAllowedError";
import { NextApiRequest } from "next";

export type AllowedMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function validateMethod(
  req: NextApiRequest,
  allowedMethod: AllowedMethods
) {
  if (allowedMethod !== req.method) {
    throw new MethodNotAllowedError();
  }
}

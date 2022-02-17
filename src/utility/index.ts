import crypto from "crypto";

export function generateId(): string {
  const id = crypto.randomBytes(16).toString("hex");
  return id;
}
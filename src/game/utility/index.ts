import crypto from "crypto";

export function generateId(): string {
  const id = crypto.randomBytes(16).toString("hex");
  return id;
}

export function delay(i: number, seconds: number) {
  setTimeout(() => {}, seconds * 1000);
}
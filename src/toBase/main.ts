import type { ToBase } from "./types.ts";

export const toBase: ToBase = ({ value, toBase }) => {
  return BigInt(value).toString(toBase);
};


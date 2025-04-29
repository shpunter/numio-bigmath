import type { ToBase } from "./types.ts";

/** Convert number to another base */
export const toBase: ToBase = ({ value, toBase }) => {
  return BigInt(value).toString(toBase);
};


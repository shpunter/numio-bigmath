import { a2s, s2a } from "../shared/utils.ts";
import type { Max, Min } from "./types.ts";
import { compareInner, maxInner, minInner } from "./utils.ts";

/** This function returns max number. */
export const max: Max = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(maxInner(array));
};

/** This function returns min number. */
export const min: Min = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(minInner(array));
};

export const isGreater = (l: string, r: string) => {
  return compareInner(s2a(l), s2a(r))[1];
};

import { a2s, s2a } from "../shared/utils.ts";
import type { Mean } from "./types.ts";
import { meanInner } from "./utils.ts";

/** This function returns mean of an array. */
export const mean: Mean = (strs) => {
  const array = strs.map((str) => s2a(str));

  const res = meanInner(array);

  return a2s(res);
};

import { s2bi } from "../shared/utils.ts";
import type { IsEqual } from "./types.ts";
import { isEqualInner } from "./utils.ts";

/** This function returns if left and right values are equal */
export const isEqual: IsEqual = ({ left, right }) => {
  return isEqualInner({ left: s2bi(left), right: s2bi(right) });
};
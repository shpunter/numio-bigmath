import { s2bi } from "../shared/utils.ts";
import type { IsLeftGreaterOrEqual } from "./types.ts";
import { isLeftGreaterOrEqualInner } from "./utils.ts";

/** This function returns if left value is greater than right value or equal*/
export const isLeftGreaterOrEqual: IsLeftGreaterOrEqual = ({ left, right }) => {
  return isLeftGreaterOrEqualInner({ left: s2bi(left), right: s2bi(right) });
};

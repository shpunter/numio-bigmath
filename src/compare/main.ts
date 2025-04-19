import { a2s, s2a } from "../shared/utils.ts";
import type { IsEqual, IsLeftGreater, Max, Min } from "./types.ts";
import { isEqualInner, isLeftGreaterInner, maxInner, minInner } from "./utils.ts";

/** This function returns max value. */
export const max: Max = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(maxInner(array));
};

/** This function returns min value. */
export const min: Min = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(minInner(array));
};

/** This function returns if left value is greater than right value */
export const isLeftGreater: IsLeftGreater = ({ left, right }) => {
  return isLeftGreaterInner({ left: s2a(left), right: s2a(right) });
};

/** This function returns if left and right values are equal */
export const isEqual: IsEqual = ({ left, right }) => {
  return isEqualInner({ left: s2a(left), right: s2a(right) });
};

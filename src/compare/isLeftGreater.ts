import { s2bi } from "../shared/utils.ts";
import type { IsLeftGreater } from "./types.ts";
import { isLeftGreaterInner } from "./utils.ts";

/** This function returns if left value is greater than right value */
export const isLeftGreater: IsLeftGreater = ({ left, right }) => {
  return isLeftGreaterInner({ left: s2bi(left), right: s2bi(right) });
};

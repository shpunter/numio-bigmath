import { bi2s, s2bi } from "../shared/utils.ts";
import type { IsEqual, IsLeftGreater, Max, Min } from "./types.ts";
import {
  isEqualInner,
  isLeftGreaterInner,
  maxInner,
  minInner,
} from "./utils.ts";

/** This function returns max value. */
export const max: Max = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bi, fpe] = maxInner(arrayInner);

  return bi2s(bi, fpe);
};

/** This function returns min value. */
export const min: Min = (array) => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bi, fpe] = minInner(arrayInner);

  return bi2s(bi, fpe);
};

/** This function returns if left value is greater than right value */
export const isLeftGreater: IsLeftGreater = ({ left, right }) => {
  return isLeftGreaterInner({ left: s2bi(left), right: s2bi(right) });
};

/** This function returns if left and right values are equal */
export const isEqual: IsEqual = ({ left, right }) => {
  return isEqualInner({ left: s2bi(left), right: s2bi(right) });
};

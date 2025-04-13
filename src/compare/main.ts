import { a2s, s2a } from "../shared/utils.ts";
import type { InputData } from "../types.ts";
import type { CompareRawFn, Max, MaxRawFn, Min, MinRawFn } from "./types.ts";

export const compareRawFn: CompareRawFn = (l, r) => {
  let idx = 0;
  let [left, right] = [l, r];
  const { isNegative: lIsNeg, intLength: lIntLen } = l;
  const { isNegative: rIsNeg, intLength: rIntLen } = r;
  const { length: lenL } = l.array;
  const { length: lenR } = r.array;
  const bothNeg = lIsNeg && rIsNeg;
  const bothPos = !lIsNeg && !rIsNeg;
  const bothIntPos = lIntLen > 0 && rIntLen > 0;
  const bothIntNeg = lIntLen <= 0 && rIntLen <= 0;

  if (lIsNeg && !rIsNeg) return [r, false];
  if (!lIsNeg && rIsNeg) return [l, true];

  if (bothPos && bothIntPos && lIntLen < rIntLen) return [r, false];
  if (bothPos && bothIntNeg && lIntLen < rIntLen) return [r, false];
  if (bothNeg && bothIntPos && lIntLen < rIntLen) return [l, true];
  if (bothNeg && bothIntNeg && lIntLen < rIntLen) return [l, true];
  if (bothNeg && bothIntNeg && lIntLen > rIntLen) return [r, false];
  if (bothNeg && bothIntPos && lIntLen > rIntLen) return [r, false];
  if (bothPos && bothIntPos && lIntLen > rIntLen) return [l, true];
  if (bothPos && bothIntNeg && lIntLen > rIntLen) return [l, true];

  if (bothNeg) [left, right] = [r, l];

  while (idx < (lenL > lenR ? lenL : lenR)) {
    const numL = left.array[idx];
    const numR = right.array[idx];

    if (!numL && bothPos) return [r, false];
    if (!numR && bothPos) return [l, true];
    if (!numL && bothNeg) return [l, true];
    if (!numR && bothNeg) return [r, false];

    if (numL !== numR) {
      return numL > numR ? [l, true] : [r, false];
    }

    idx += 1;
  }

  return [l, true];
};

export const maxRawFn: MaxRawFn = (array: InputData[]) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    compareRawFn(max, array[i])[1] || (max = array[i]);
  }

  return max;
};

export const minRawFn: MinRawFn = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    compareRawFn(min, array[i])[1] && (min = array[i]);
  }

  return min;
};

/** This function returns max number. */
export const max: Max = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(maxRawFn(array));
};

/** This function returns min number. */
export const min: Min = (strs) => {
  const array = strs.map((str) => s2a(str));

  return a2s(minRawFn(array));
};

export const isGreater = (l: string, r: string) => {
  return compareRawFn(s2a(l), s2a(r))[1];
};

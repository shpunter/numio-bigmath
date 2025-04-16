import type { CompareInner, MaxInner, MinInner } from "./types.ts";

export const maxInner: MaxInner = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    compareInner(max, array[i])[1] || (max = array[i]);
  }

  return max;
};

export const minInner: MinInner = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    compareInner(min, array[i])[1] && (min = array[i]);
  }

  return min;
};

export const compareInner: CompareInner = (l, r) => {
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

  if (bothPos && lIntLen > 0 && rIntLen === 0) return [l, true];
  if (bothPos && lIntLen === 0 && rIntLen > 0) return [r, false];
  if (!bothPos && lIntLen > 0 && rIntLen === 0) return [r, false];
  if (!bothPos && lIntLen === 0 && rIntLen > 0) return [l, true];

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

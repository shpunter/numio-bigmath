import type {
  CompareInner,
  IsEqualInner,
  IsLeftGreaterInner,
  MaxInner,
  MinInner,
} from "./types.ts";

export const maxInner: MaxInner = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (compareInner(array[i], max)[1] === 1) max = array[i];
  }

  return max;
};

export const minInner: MinInner = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (compareInner(array[i], min)[1] === -1) min = array[i];
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
  const isNilL = l.array.length === 1 && l.array[0] === 48;
  const isNilR = r.array.length === 1 && r.array[0] === 48;

  if (lIsNeg && !rIsNeg) return [r, -1];
  if (!lIsNeg && rIsNeg) return [l, 1];

  if (bothPos && isNilL && !isNilR) return [r, -1];
  if (bothPos && !isNilL && isNilR) return [l, 1];

  if (bothNeg && isNilL && !isNilR) return [l, 1];
  if (bothNeg && !isNilL && isNilR) return [r, -1];

  if (bothPos && lIntLen > 0 && rIntLen === 0) return [l, 1];
  if (bothPos && lIntLen === 0 && rIntLen > 0) return [r, -1];

  if (!bothPos && lIntLen > 0 && rIntLen === 0) return [r, -1];
  if (!bothPos && lIntLen === 0 && rIntLen > 0) return [l, 1];

  if (bothPos && bothIntPos && lIntLen < rIntLen) return [r, -1];
  if (bothPos && bothIntNeg && lIntLen < rIntLen) return [r, -1];

  if (bothNeg && bothIntPos && lIntLen < rIntLen) return [l, 1];
  if (bothNeg && bothIntNeg && lIntLen < rIntLen) return [l, 1];

  if (bothNeg && bothIntNeg && lIntLen > rIntLen) return [r, -1];
  if (bothNeg && bothIntPos && lIntLen > rIntLen) return [r, -1];

  if (bothPos && bothIntPos && lIntLen > rIntLen) return [l, 1];
  if (bothPos && bothIntNeg && lIntLen > rIntLen) return [l, 1];

  if (bothNeg) [left, right] = [r, l];

  while (idx < (lenL > lenR ? lenL : lenR)) {
    const numL = left.array[idx];
    const numR = right.array[idx];

    if (!numL && bothPos) return [r, -1];
    if (!numR && bothPos) return [l, 1];
    if (!numL && bothNeg) return [l, 1];
    if (!numR && bothNeg) return [r, -1];

    if (numL !== numR) {
      return numL > numR ? [l, 1] : [r, -1];
    }

    idx += 1;
  }

  return [l, 0];
};

export const isEqualInner: IsEqualInner = ({ left, right }) => {
  return compareInner(left, right)[1] === 0;
};

export const isLeftGreaterInner: IsLeftGreaterInner = ({ left, right }) => {
  return compareInner(left, right)[1] > 0;
};

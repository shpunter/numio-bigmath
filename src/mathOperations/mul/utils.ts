import type { InputData, Route } from "../../types.ts";
import type { MulInner } from "./types.ts";

/** This function multiplies 2 numbers (as array). */
export const mulInner: MulInner = (
  [arrL, intL],
  [arrR, intR],
  isNegative,
) => {
  if (
    arrL.length === 0 || arrR.length === 0 ||
    (arrL.length === 1 && arrL[0] === 48) ||
    (arrR.length === 1 && arrR[0] === 48)
  ) {
    return { array: [48], intLength: 1, isFloat: false, isNegative: false };
  }

  const dec = (arrL.length - intL) + (arrR.length - intR);

  const [left, right] = arrL.length >= arrR.length
    ? [arrL, arrR]
    : [arrR, arrL];

  const sums: number[] = Array(right.length + left.length - 1);

  for (let i = right.length - 1; i >= 0; i--) {
    for (let j = left.length - 1; j >= 0; j--) {
      const idx = j + i;

      sums[idx] = (sums[idx] ?? 0) +
        (left[j] - 48) * (right[i] - 48);
    }
  }

  const result = Array(sums.length);
  let idx = sums.length - 1;
  let carryOver = 0;
  let currNum = 0;
  let nextNum = 0;

  while (idx >= 0) {
    currNum = sums[idx] ?? 0;
    nextNum = (currNum + carryOver) % 10;
    carryOver = (carryOver + currNum) / 10 | 0;
    result[idx] = nextNum + 48;
    idx -= 1;
  }

  carryOver > 0 && result.unshift(carryOver + 48);

  return {
    array: result,
    intLength: result.length - dec,
    isFloat: dec > 0,
    isNegative,
  };
};

export const mulRoute: Route = (input: InputData[], initValue: InputData) => {
  return input.reduce((left, right) => {
    if (left.array.length === 0) return right;

    return mulInner(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative !== right.isNegative,
    );
  }, initValue);
};

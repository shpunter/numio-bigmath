import type { Multiplication } from "./types.ts";

/** This function multiplies 2 numbers (as array). */
export const multiplication: Multiplication = ([arrL, intL], [arrR, intR]) => {
  if (arrL.length === 0 || arrR.length === 0) {
    return { array: [48], intLength: 1, isFloat: false, isNegative: false };
  }

  const dec = (arrL.length - intL) + (arrR.length - intR);

  const [left, right] = arrL.length >= arrR.length
    ? [arrL, arrR]
    : [arrR, arrL];

  const sums: number[] = Array(
    right.length + left.length - 1,
  );

  for (let i = right.length - 1; i >= 0; i--) {
    for (let j = left.length - 1; j >= 0; j--) {
      const idx = j + i;

      sums[idx] = (sums[idx] ?? 0) +
        (left[j] - 48) * (right[i] - 48);
    }
  }

  const len = sums.length > dec ? sums.length + 1 : dec + 2;
  const result = Array((dec ? len : sums.length) + 1);
  const dotIdx = result.length - 1 - dec;
  const diff = result.length - sums.length;
  let idx = sums.length - 1 + diff;
  let carryOver = 0;
  let currNum = 0;
  let nextNum = 0;

  while (idx > 0 + (dec ? 1 : 0)) {
    if (dec && idx === 0 && diff === 1) break;
    if (dotIdx === idx && dec) result[idx] = 46;

    const _idx = idx - diff;
    const shift = (dec && idx <= dotIdx) ? 1 : 0;

    currNum = sums[_idx] ?? 0;
    nextNum = (currNum + carryOver) % 10;
    carryOver = (carryOver + currNum) / 10 | 0;
    result[idx - shift] = nextNum + 48;
    idx -= 1;
  }
  result[0] = carryOver ? carryOver + 48 : 32;

  return { array: result, intLength: result.length - dec, isFloat: dec > 0, isNegative: false };
};

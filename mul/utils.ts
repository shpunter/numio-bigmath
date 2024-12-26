import type { Multiplication } from "./types.ts";

/** This function multiplies 2 numbers (as array). */
export const multiplication: Multiplication = (arrayL, arrayR, decNum) => {
  if (arrayL.length === 0 || arrayR.length === 0) return [[48], 0];

  const [left, right] = arrayL.length >= arrayR.length
    ? [arrayL, arrayR]
    : [arrayR, arrayL];

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

  const len = sums.length > decNum ? sums.length + 1 : decNum + 2;
  const result = Array(decNum ? len : sums.length);

  const dotIdx = result.length - 1 - decNum;
  const diff = result.length - sums.length;
  let idx = sums.length - 1 + diff;
  let carryOver = 0;
  let currNum = 0;
  let nextNum = 0;

  while (idx >= 0) {
    if (decNum && idx === 0 && diff === 1) break;
    if (dotIdx === idx && decNum) result[idx] = 46;

    const _idx = idx - diff;
    const shift = (decNum && idx <= dotIdx) ? 1 : 0;

    currNum = sums[_idx] ?? 0;
    nextNum = (currNum + carryOver) % 10;
    carryOver = (carryOver + currNum) / 10 | 0;
    result[idx - shift] = nextNum + 48;
    idx -= 1;
  }

  return [result, carryOver ? carryOver + 48 : 0];
};

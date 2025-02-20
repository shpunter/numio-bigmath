import type { Addition } from "./types.ts";

/** This function adds 2 numbers (as array). */
export const addition: Addition = ([arrL, intL], [arrR, intR], isNegative) => {
  const [left, right, intLeft, intRight] = intL >= intR
    ? [arrL, arrR, intL, intR]
    : [arrR, arrL, intR, intL];
  const fracLenL = left.length - intLeft;
  const fracLenR = right.length - intRight;
  const fracMaxLen = (fracLenL >= fracLenR ? fracLenL : fracLenR) - 1;
  let pl = (intLeft >= intRight ? intLeft : intRight) + fracMaxLen;
  let pr = (intLeft >= intRight ? intRight : intLeft) + fracMaxLen;
  let carryOver = 48;

  if (fracLenL === 0 && fracLenR > 0) left.push(46);

  while (pr >= 0) {
    if (left[pl] === 46 || right[pr] === 46) {
      pr -= 1;
      pl -= 1;
    }

    const sum = ((left[pl] ?? 48) + (right[pr] ?? 48) + carryOver) -
      3 * 48;

    if (sum > 9) {
      left[pl] = (sum % 10) + 48;
      carryOver = ((sum / 10) | 0) + 48;
    } else {
      left[pl] = sum + 48;
      carryOver = 48;
    }

    pr -= 1;
    pl -= 1;
  }

  while (pl >= 0 && carryOver) {
    const sum = (left[pl] + carryOver) - 2 * 48;

    left[pl] = (sum % 10) + 48;
    carryOver = ((sum / 10) | 0) + 48;
    pl -= 1;
  }

  carryOver > 48 && left.unshift(carryOver);

  return {
    array: left,
    intLength: left.length -1 - fracMaxLen,
    isNegative,
    isFloat: fracLenL + fracLenR > 0,
  };
};

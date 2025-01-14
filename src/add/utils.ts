import type { Addition } from "./types.ts";

/** This function adds 2 numbers (as array). */
export const addition: Addition = ([arrL, intL], [arrR, intR]) => {
  const fracLenL = arrL.length - intL;
  const fracLenR = arrR.length - intR;
  const fracMaxLen = fracLenL >= fracLenR ? fracLenL : fracLenR;
  const [left, right] = intL >= intR ? [arrL, arrR] : [arrR, arrL];
  let pl = (intL >= intR ? intL : intR) + fracMaxLen - 1;
  let pr = (intL >= intR ? intR : intL) + fracMaxLen - 1;
  let carryOver = 48;

  if (intL === left.length - 1 && intR !== right.length - 1) left.push(46);

  while (pr > 0) {
    if (left[pl] === 46 || right[pl] === 46) {
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

  while (pl > 0 && carryOver) {
    const sum = (left[pl] + carryOver) - 2 * 48;

    left[pl] = (sum % 10) + 48;
    carryOver = ((sum / 10) | 0) + 48;
    pl -= 1;
  }

  left[0] = carryOver > 48 ? carryOver : 32;

  return left;
};

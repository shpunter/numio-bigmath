import type { Addition } from "./types.ts";

/** This function adds 2 numbers (as array). */
export const addition: Addition = (arrayL, arrayR, intLenL, intLenR) => {
  const fracLenL = arrayL.length - intLenL;
  const fracLenR = arrayR.length - intLenR;
  const fracMaxLen = fracLenL >= fracLenR ? fracLenL : fracLenR;
  const [left, right] = intLenL >= intLenR ? [arrayL, arrayR] : [arrayR, arrayL];
  let pl = (intLenL >= intLenR ? intLenL : intLenR) + fracMaxLen - 1;
  let pr = (intLenL >= intLenR ? intLenR : intLenL) + fracMaxLen - 1;
  let carryOver = 48;

  if (intLenL === left.length && intLenR !== right.length) left.push(46);

  while (pr >= 0) {
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

  while (pl >= 0 && carryOver) {
    const sum = (left[pl] + carryOver) - 2 * 48;

    left[pl] = (sum % 10) + 48;
    carryOver = ((sum / 10) | 0) + 48;
    pl -= 1;
  }

  return [left, !(carryOver - 48) ? 0 : carryOver];
};

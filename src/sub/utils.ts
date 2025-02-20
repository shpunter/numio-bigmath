import type { Subtract } from "./types.ts";

/** This function subtracts 2 numbers (as array). */
export const subtract: Subtract = ([arrL, intL], [arrR, intR]) => {
  const lenDiff = (intL - intR) * (intL > intR ? 1 : -1);
  let [left, right, intLeft, intRight] = intL >= intR
    ? [arrL, arrR, intL, intR]
    : [arrR, arrL, intR, intL];
  const fracLenL = left.length - intLeft;
  const fracLenR = right.length - intRight;
  let pl = lenDiff;
  let pr = 0;
  let isLeftBigger = lenDiff > 0;
  let carryOver = false;
  let isNegative = intLeft !== intL;

  if (intLeft === left.length && intRight !== right.length) left.push(46);
  if (intRight === right.length && intLeft !== left.length) right.push(46);

  while (pr < right.length) {
    if (left[pl] === 46 || right[pr] === 46) {
      pr += 1;
      pl += 1;
    }

    let sub = ((left[pl] ?? 48) - (right[pr] ?? 48)) + 48;

    if (!isLeftBigger && left[pl] > right[pr]) {
      isLeftBigger = true;
    }

    if (!isLeftBigger && sub < 48 && lenDiff === 0) {
      [left, right] = [right, left];
      [intL, intR] = [intR, intL];
      isLeftBigger = true;
      isNegative = true;
      continue;
    }

    if (sub < 48) {
      sub += 10;
      carryOver = true;
    }

    let plReverse = pl - 1;
    let prReverse = pr - 1;

    while (carryOver) {
      if (left[plReverse] === 46 || right[prReverse] === 46) {
        plReverse -= 1;
        prReverse -= 1;
      }

      if (left[plReverse] !== 48) {
        plReverse >= 0 && (left[plReverse] -= 1);
        prReverse >= 0 && (right[prReverse] -= 1);

        carryOver = false;
      } else {
        plReverse >= 0 && (left[plReverse] = 57);
        prReverse >= 0 && (right[prReverse] = 57);
      }

      plReverse -= 1;
      prReverse -= 1;
    }

    left[pl] = sub;
    right[pr] = sub;

    pl += 1;
    pr += 1;
  }

  while (left[0] === 48 && left[1] !== 46 && left.length > 1) {
    left.shift();
    intLeft -= 1;
  }

  return {
    array: left,
    intLength: intLeft,
    isNegative,
    isFloat: fracLenL + fracLenR > 0,
  };
};

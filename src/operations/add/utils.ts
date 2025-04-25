import { subInner } from "../sub/utils.ts";
import type { Route } from "../../types.ts";
import type { AddInner, FillHead, TrimTail } from "./types.ts";

/** This function adds 2 numbers (as array). */
export const addInner: AddInner = ([arrL, intL], [arrR, intR], isNegative) => {
  const [left, right, intLeft, intRight] = intL >= intR
    ? [arrL, arrR, intL, intR]
    : [arrR, arrL, intR, intL];
  const fracLenL = left.length - intLeft;
  const fracLenR = right.length - intRight;
  const fracMaxLen = (fracLenL >= fracLenR ? fracLenL : fracLenR) - 1;
  let pl = (intLeft >= intRight ? intLeft : intRight) + fracMaxLen;
  let pr = (intLeft >= intRight ? intRight : intLeft) + fracMaxLen;
  let carryOver = 48;

  while (pl > left.length - 1) {
    left.push(48);
  }

  while (pr >= 0) {
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
    intLength: left.length - 1 - fracMaxLen,
    isNegative,
    isFloat: fracLenL + fracLenR > 0,
  };
};

export const addRoute: Route = (input, initValue) => {
  return input.reduce((left, right) => {
    if (left.array.length === 0) return right;

    if (left.isNegative && !right.isNegative) {
      return subInner(
        [right.array, right.intLength],
        [left.array, left.intLength],
      );
    }

    if (!left.isNegative && right.isNegative) {
      return subInner(
        [left.array, left.intLength],
        [right.array, right.intLength],
      );
    }

    return addInner(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative && right.isNegative,
    );
  }, initValue);
};

export const fillHead: FillHead = (len, fpe, isNeg, hasBefore) => {
  let head = (isNeg ? "-" : "") + (hasBefore ? "" : "0.");

  while (len < fpe) {
    head = head + "0";
    len += 1;
  }

  return head;
};

export const trimTail: TrimTail = (str) => {
  if (str[str.length - 1] !== "0") return str;

  let count = 0;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== "0") return str.slice(0, str.length - count);

    count += 1;
  }

  return str;
};

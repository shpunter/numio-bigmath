import type { Division, DivRoute } from "./types.ts";

export const division: Division = (
  [arrL, intL],
  [arrR, intR],
  isNegative,
  initLimit,
) => {
  const decDiff = (arrL.length - intL) - (arrR.length - intR);
  const [L, R] = [[arrR, 1], [arrL, -1]] as const;
  const [arr, abs] = decDiff > 0 ? L : R;

  for (let i = 0; i < decDiff * abs; i++) {
    arr.push(48);
  }

  let digit = 48;
  let limit = initLimit;
  let isFloat = false;
  let l = 0;
  let r = arrR.length - 1;
  let intLength = 0;
  const result: number[] = [];
  const lenArrayL = r - arrL.length;

  for (let i = 0; i <= lenArrayL; i++) {
    if (i === 0) {
      isFloat = true;
      intLength = 1;
    }

    result.push(48);
    arrL.push(48);
    limit -= 1;
  }

  while (r < arrL.length && limit >= 0) {
    let comp = false;

    if (arrL[l] === 48) l += 1;

    for (let i = 0; i < arrR.length; i++) {
      if ((r - l + 1) < arrR.length) comp = true;
      if ((r - l + 1) !== arrR.length) break;

      if (arrL[l + i] !== arrR[i]) {
        comp = arrL[l + i] < arrR[i];
        break;
      }
    }

    if (comp) {
      if (r < arrL.length && (result.length > 0 || digit !== 48)) {
        if (!isFloat) intLength += 1;
        result.push(digit);
      }

      if (r >= arrL.length - 1) {
        if (initLimit === limit) isFloat = true;
        arrL.push(48);
        limit -= 1;
      }

      r += 1;
      digit = 48;

      continue;
    }

    for (let i = arrR.length - 1; i >= 0; i--) {
      const idx = r - (arrR.length - 1 - i);

      if (arrL[idx] < arrR[i]) {
        arrL[idx] = arrL[idx] - arrR[i] + 58;
        arrL[idx - 1] -= 1;
      } else {
        arrL[idx] = arrL[idx] - arrR[i] + 48;
      }
    }

    digit += 1;
  }

  const multipliedResult = [];
  let count = 0;

  if (result[0] === 48) {
    let isGrZero = false;

    for (let i = 0; i < result.length; i++) {
      if (!isGrZero) result[i] > 48 ? isGrZero = true : count += 1;

      isGrZero && multipliedResult.push(result[i]);
    }

    for (let i = 0; i < count; i++) {
      multipliedResult.push(48);
      intLength -= 1;
    }
  }

  return result.length === count
    ? {
      array: [48],
      isFloat: false,
      isNegative: false,
      intLength: 1,
    }
    : {
      array: result[0] === 48 ? multipliedResult : result,
      isFloat,
      isNegative,
      intLength,
    };
};

export const divRoute: DivRoute = (input, initValue, limit) => {
  return input.reduce((left, right) => {
    if (left.array.length === 0) return right;

    return division(
      [left.array, left.intLength],
      [right.array, right.intLength],
      left.isNegative !== right.isNegative,
      limit,
    );
  }, initValue);
};

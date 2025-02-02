import type { Division } from "./types.ts";

export const division: Division = ([arrL, decL], [arrR, decR], initLimit) => {
  const decDiff = decL - decR;
  const [L, R] = [[arrR, 1], [arrL, -1]] as const;
  const [array, abs] = decDiff > 0 ? L : R;

  for (let i = 0; i < decDiff * abs; i++) {
    array.push(48);
  }

  let digit = 48;
  let limit = initLimit;
  let isFloat = false;
  let l = 0;
  let r = arrR.length - 1;
  const result: number[] = [];
  const lenArrayL = r - arrL.length;

  for (let i = 0; i <= lenArrayL; i++) {
    result.length ? result.push(48) : result.push(46);
    isFloat || (isFloat = true);
    arrL.push(48);
    limit -= 1;
  }

  while (r < arrL.length && limit >= 0) {
    let hasNum = false;
    let comp = false;

    if (arrL[l] === 48) l += 1;

    for (let i = 0; i < arrR.length; i++) {
      if (!hasNum && arrL[l + i] > 48) hasNum = true;
      if ((r - l + 1) < arrR.length) comp = true;
      if ((r - l + 1) !== arrR.length) break;

      if (arrL[l + i] !== arrR[i]) {
        comp = arrL[l + i] < arrR[i];
        break;
      }
    }

    if (comp) {
      if (r < arrL.length && (result.length > 0 || digit !== 48)) {
        result.push(digit);
      }

      if (r >= arrL.length - 1 && hasNum) {
        !isFloat && initLimit === limit && result.push(46);
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
      } else arrL[idx] = arrL[idx] - arrR[i] + 48;
    }

    digit += 1;
  }

  result[0] === 46 && result.unshift(48);

  return [
    result[result.length - 1] === 46 ? [48] : result,
    isFloat || result[1] === 46,
  ];
};

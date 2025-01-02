import type { Division } from "./types.ts";

export const division: Division = ([arrL, decL], [arrR, decR], initLimit) => {
  const decDiff = decL - decR;
  const [L, R] = [[arrR, 1], [arrL, -1]] as const;
  const [array, abs] = decDiff > 0 ? L : R;

  for (let i = 0; i < decDiff * abs; i++) {
    array.push(0);
  }

  let digit = 0;
  let limit = initLimit;
  let isFloat = false;
  let l = 0;
  let r = arrR.length - 1;
  const result: number[] = [];
  const lenArrayL = r - arrL.length;

  for (let i = 0; i <= lenArrayL; i++) {
    result.length ? result.push(48) : result.push(46);
    isFloat || (isFloat = true);
    arrL.push(0);
    limit -= 1;
  }

  while (r < arrL.length && limit >= 0) {
    let hasNum = false;
    let comp = false;

    if (arrL[l] === 0) l += 1;

    for (let i = 0; i < arrR.length; i++) {
      if (!hasNum && arrL[l + i] > 0) hasNum = true;
      if ((r - l + 1) < arrR.length) comp = true;
      if ((r - l + 1) !== arrR.length) break;
      if (arrL[l + i] === arrR[i]) continue;

      comp = arrL[l + i] < arrR[i];
      break;
    }

    if (comp) {
      if (r < arrL.length && (result.length > 0 || digit !== 0)) {
        result.push(digit + 48);
      }

      if (r >= arrL.length - 1 && hasNum) {
        !isFloat && initLimit === limit && result.push(46);
        arrL.push(0);
        limit -= 1;
      }

      r += 1;
      digit = 0;

      continue;
    }

    for (let j = arrR.length - 1; j >= 0; j--) {
      const idx = r - (arrR.length - 1 - j);

      if (arrL[idx] < arrR[j]) {
        arrL[idx] = arrL[idx] + 10 - arrR[j];
        arrL[idx - 1] -= 1;
      } else arrL[idx] -= arrR[j];
    }

    digit += 1;
  }

  return [
    result[result.length - 1] === 46 ? [48] : result,
    isFloat || result[0] === 46,
  ];
};

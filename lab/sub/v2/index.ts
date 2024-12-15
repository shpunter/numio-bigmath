import { sub } from "./utils.ts";

export const subV2 = (left: string, right: string) => {
  let intLenL = left.length;
  let intLenR = right.length;
  const arrL: number[] = Array(left.length);
  const arrR: number[] = Array(right.length);

  for (let i = 0; i < left.length; i++) {
    const charCode = left.charCodeAt(i);

    if (charCode === 46) intLenL = i;

    arrL[i] = charCode;
  }

  for (let i = 0; i < right.length; i++) {
    const charCode = right.charCodeAt(i);

    if (charCode === 46) intLenR = i;

    arrR[i] = charCode;
  }

  const isFloat = intLenL !== left.length || intLenR !== right.length;
  const [result, isNegative] = sub(arrL, arrR, intLenL, intLenR);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 48 && result[i + 1] !== 46) result[i] = 32;
    else break;
  }

  for (let i = result.length - 1; i > 0; i--) {
    if (isFloat && result[i] === 48 || result[i] === 46) result[i] = 32;
    else break;
  }

  return (isNegative ? "-" : "") + String.fromCharCode(...result).trim();
};

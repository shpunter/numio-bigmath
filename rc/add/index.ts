import { addition } from "./utils.ts";

export const add = (left: string, right: string) => {
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
  const [result, carryOver] = addition(arrL, arrR, intLenL, intLenR);

  for (let i = result.length - 1; i > 0; i--) {
    if (isFloat && result[i] === 48 || result[i] === 46) result[i] = 32;
    else break;
  }

  return (carryOver ? "1" : "") + String.fromCharCode(...result).trim();
};

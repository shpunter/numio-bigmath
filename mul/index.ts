import { multiplication } from "./utils.ts";

/** This function multiplies 2 numbers (as string). */
export const mul = (left: string, right: string): string => {
  const arrL: number[] = [];
  const arrR: number[] = [];
  let decNum = 0;

  for (let i = 0; i < left.length; i++) {
    const charCode = left.charCodeAt(i);

    if (arrL.length === 0 && charCode === 48) continue;
    if (charCode === 46) {
      decNum += left.length - 1 - i;
      continue;
    }

    arrL.push(charCode);
  }

  for (let i = 0; i < right.length; i++) {
    const charCode = right.charCodeAt(i);

    if (arrR.length === 0 && charCode === 48) continue;
    if (charCode === 46) {
      decNum += right.length - 1 - i;
      continue;
    }

    arrR.push(charCode);
  }

  const [result, carryOver] = multiplication(arrL, arrR, decNum);

  return (carryOver ? String.fromCharCode(carryOver) : "") +
    String.fromCharCode(...result).trim();
};

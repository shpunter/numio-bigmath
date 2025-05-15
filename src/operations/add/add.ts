import type { BI } from "../../shared/types.ts";
import { bi2s, s2bi, calcInner } from "../../shared/utils.ts";

const MAX_SUM = 8000000000000000;
const MIN_SUM = -8000000000000000;

/** This function adds numbers (as string). */
export const add = (array: string[]): string => {
  const arrayInner: BI[] = Array(array.length);
  let sum = 0;
  let i = 0;
  let j = 0;
  let fpi = 0;
 
  while (i < array.length) {
    fpi = array[i].indexOf(".");

    if (array[i].length <= 15 && fpi === -1) {
      sum += +array[i];
    } else {
      arrayInner[j] = s2bi(array[i], fpi);
      j += 1;
    }

    i += 1;

    if (sum > MAX_SUM || sum < MIN_SUM) {
      arrayInner[j] = [BigInt(sum), 0];
      sum = 0;
      j += 1;
    }
  }

  if (i !== j) arrayInner.length = j + 1;

  arrayInner[j] = [BigInt(sum), 0];

  const bi = calcInner(arrayInner, (a, b) => a + b);

  return bi2s(bi);
};

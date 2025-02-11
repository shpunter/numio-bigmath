import type { A2S, S2AMD, S2ASA } from "./types.ts";

// array to string
export const a2s: A2S = (array, isFloat, isNegative = false) => {
  let isToCheckTail = isFloat;

  for (let i = array.length - 1; i >= 0; i--) {
    if (isToCheckTail && array[i] === 46) {
      array[i] = 32;
      isToCheckTail = false;
      break;
    }

    if (isToCheckTail && array[i] === 48) array[i] = 32;
    else break;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === 46 || array.length <= 1) break;

    if (array[i] === 48) array[i] = 32;
    else break;
  }

  return (isNegative ? "-" : "") + String.fromCharCode(...array).trim();
};

// string to array (sub, add)
export const s2aSA: S2ASA = (string) => {
  const negative = string.charCodeAt(0) === 45;
  const shift = negative ? 1 : 0;
  const array = Array<number>(string.length - shift);
  let int = string.length - shift;
  let isFloat = false;


    for (let idx = 0 + shift; idx < string.length; idx++) {
      const charCode = string.charCodeAt(idx);

      if (charCode === 46) {
        int = idx - shift;
        isFloat || (isFloat = true);
      }

      array[idx - shift] = charCode;
    }
  

  return [
    { array: array, int: int, isNegative: negative },
    isFloat,
  ] as const;
};

// string to array (mul, div)
export const s2aMD: S2AMD = (string) => {
  // const { length: len } = strings;
  const array = Array<number>(0);
  const negative = string.charCodeAt(0) === 45;
  let dec = 0;

  // for (let i = 0; i < len; i++) {
  //   array[i] = Array<number>(0);
  //   negative[i] = strings[i].charCodeAt(0) === 45;
  // }

  // for (let i = 0; i < len; i++) {
    const shift = negative ? 1 : 0;

    for (let idx = 0 + shift; idx < string.length; idx++) {
      const charCode = string.charCodeAt(idx);

      if (array.length === 0 && charCode === 48) continue;
      if (charCode === 46) {
        dec = string.length - 1 - idx - shift;
        continue;
      }

      array.push(charCode);
    }
  // }

  return { array: array, dec: dec ?? 0, isNegative: negative };
};

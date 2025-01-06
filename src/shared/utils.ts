import type { A2S, S2AMD, S2ASA } from "./types.ts";

// array to string
export const a2s: A2S = (array, isFloat) => {
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

  return String.fromCharCode(...array).trim();
};

// string to array (sub, add)
export const s2aSA: S2ASA = (strings, shiftCO = 0) => {
  const { length: len } = strings;
  const ints = Array<number>(len);
  const arrays = Array<number[]>(len);
  let isFloat = false;

  for (let i = 0; i < len; i++) {
    ints[i] = strings[i].length;
    arrays[i] = Array<number>(strings[i].length + shiftCO);
  }

  for (let i = 0; i < len; i++) {
    for (let idx = 0 + shiftCO; idx < strings[i].length + shiftCO; idx++) {
      const charCode = strings[i].charCodeAt(idx - shiftCO);

      if (charCode === 46) {
        ints[i] = idx - shiftCO;
        isFloat || (isFloat = true);
      }

      arrays[i][idx] = charCode;
    }
  }

  return [[arrays[0], ints[0]], [arrays[1], ints[1]], isFloat];
};

// string to array (mul, dic)
export const s2aMD: S2AMD = (strings) => {
  const { length: len } = strings;
  const decs = Array<number>(len);
  const arrays = Array<number[]>(len);

  for (let i = 0; i < len; i++) {
    arrays[i] = Array<number>(0);
  }

  for (let i = 0; i < len; i++) {
    for (let idx = 0; idx < strings[i].length; idx++) {
      const charCode = strings[i].charCodeAt(idx);

      if (arrays[i].length === 0 && charCode === 48) continue;
      if (charCode === 46) {
        decs[i] = strings[i].length - 1 - idx;
        continue;
      }

      arrays[i].push(charCode);
    }
  }

  return [[arrays[0], decs[0] ?? 0], [arrays[1], decs[1] ?? 0]];
};

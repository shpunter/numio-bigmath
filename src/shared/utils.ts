import type { CreateString, StrToArray } from "./types.ts";

export const createString: CreateString = (carryOver, array, isFloat) => {
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
    if (array[i + 1] === 46 || carryOver || array.length <= 1) break;

    if (array[i] === 48) array[i] = 32;
    else break;
  }

  return (carryOver ? String.fromCharCode(carryOver) : "") +
    String.fromCharCode(...array).trim();
};

export const strToArray: StrToArray = (strings) => {
  const { length: len } = strings;
  const ints = Array<number>(len);
  const arrays = Array<number[]>(len);
  let isFloat = false;

  for (let i = 0; i < len; i++) {
    ints[i] = strings[i].length;
    arrays[i] = Array<number>(strings[i].length);
  }

  for (let i = 0; i < len; i++) {
    for (let idx = 0; idx < strings[i].length; idx++) {
      const charCode = strings[i].charCodeAt(idx);

      if (charCode === 46) {
        ints[i] = idx;
        isFloat || (isFloat = true);
      }

      arrays[i][idx] = charCode;
    }
  }

  return [[arrays[0], ints[0]], [arrays[1], ints[1]], isFloat];
};

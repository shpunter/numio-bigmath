import { compareRawFn } from "../compare/main.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { ASC } from "./constants.ts";
import type { Heapify, Sort, SortRawFn } from "./types.ts";

const heapify: Heapify = (array, len, i, sorting) => {
  const idxL = 2 * i + 1;
  const idxR = idxL + 1;
  let idx = i;

  if (sorting === ASC) {
    if (idxL < len && compareRawFn(array[idxL], array[idx])[1]) idx = idxL;
    if (idxR < len && compareRawFn(array[idxR], array[idx])[1]) idx = idxR;
  } else {
    if (idxL < len && compareRawFn(array[idx], array[idxL])[1]) idx = idxL;
    if (idxR < len && compareRawFn(array[idx], array[idxR])[1]) idx = idxR;
  }

  if (idx !== i) {
    [array[i], array[idx]] = [array[idx], array[i]];
    heapify(array, len, idx, sorting);
  }
};

const sortRawFn: SortRawFn = (array, sorting) => {
  const { length: len } = array;

  for (let i = (len >> 1) - 1; i >= 0; i--) {
    heapify(array, len, i, sorting);
  }

  for (let i = len - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, sorting);
  }

  return array;
};

/** Using this function sort an array. */
export const sort: Sort = (array, sorting = ASC) => {
  const inputDataArray = array.map((str) => s2a(str));

  sortRawFn(inputDataArray, sorting);

  return inputDataArray.map((input) => a2s(input));
};

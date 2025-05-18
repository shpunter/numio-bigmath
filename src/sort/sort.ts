import { bi2s, s2bi } from "../shared/utils.ts";
import { ASC } from "./constants.ts";
import type { Sort } from "./types.ts";
import { sortInner } from "./utils.ts";

/** Using this function sort an array. */
export const sort: Sort = (array, sorting = ASC) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  sortInner(arrayInner, sorting);

  return arrayInner.map((bi) => bi2s(bi));
};

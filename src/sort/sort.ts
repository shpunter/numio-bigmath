import { bi2s, s2bi } from "../shared/utils.ts";
import { ASC } from "./constants.ts";
import type { Sort } from "./types.ts";
import { sortInner } from "./utils.ts";

/** Using this function sort an array. */
export const sort: Sort = (array, sorting = ASC) => {
  const arrayInner = array.map((str) => s2bi(str));

  sortInner(arrayInner, sorting);

  return arrayInner.map((bi) => bi2s(bi));
};

import { a2s, s2a } from "../shared/utils.ts";
import { ASC } from "./constants.ts";
import type { Sort } from "./types.ts";
import { sortInner } from "./utils.ts";

/** Using this function sort an array. */
export const sort: Sort = (array, sorting = ASC) => {
  const inputDataArray = array.map((str) => s2a(str));

  sortInner(inputDataArray, sorting);

  return inputDataArray.map((input) => a2s(input));
};

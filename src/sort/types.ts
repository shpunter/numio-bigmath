import type { InputData } from "../types.ts";
import type { sortingArray } from "./constants.ts";

export type Sorting = typeof sortingArray[number];
export type Sort = (array: string[], sorting?: Sorting) => string[];
export type SortInner = (array: InputData[], sorting: Sorting) => InputData[];
export type Heapify = (
  array: InputData[],
  len: number,
  i: number,
  sorting: Sorting,
) => void;

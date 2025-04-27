import type { BI } from "../shared/types.ts";
import type { sortingArray } from "./constants.ts";

export type Sorting = typeof sortingArray[number];
export type Sort = (array: string[], sorting?: Sorting) => string[];
export type SortInner = (array: BI[], sorting: Sorting) => BI[];
export type Heapify = (
  array: BI[],
  len: number,
  i: number,
  sorting: Sorting,
) => void;

import { PipeInner } from "../pipe/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import { cloneInner } from "../shared/utils.ts";
import { ASC } from "../sort/constants.ts";
import { sortInner } from "../sort/utils.ts";
import type { TMADInner } from "./types.ts";

export const MADInner: TMADInner = (array) => {
  const median = quartileInner(array).Q2;

  const madArray = array.map((el) => {
    const { result } = new PipeInner().subInner([el, cloneInner(median)]);
    result.isNegative = false;

    return result;
  });

  const sorted = sortInner(madArray, ASC);

  return quartileInner(sorted).Q2;
};

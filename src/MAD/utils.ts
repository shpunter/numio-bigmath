import { meanInner } from "../mean/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import type { BI } from "../shared/types.ts";
import { ASC } from "../sort/constants.ts";
import { sortInner } from "../sort/utils.ts";
import type { TMADInner } from "./types.ts";

export const MADInner: TMADInner = (array, { from }) => {
  if (array.length < 3) {
    throw Error("To calculate MAD you need at least 3 elements");
  }

  const fromMap = {
    median: quartileInner(array).Q2,
    mean: meanInner(array)
  } 

  const madArray = array.map<BI>((el) => {
    return new PipeInner().sub([el, fromMap[from]]).abs().bi;
  });

  const sorted = sortInner(madArray, ASC);

  return quartileInner(sorted).Q2;
};

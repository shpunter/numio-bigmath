import { PipeInner } from "../pipe/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import type { BI } from "../shared/types.ts";
import { ASC } from "../sort/constants.ts";
import { sortInner } from "../sort/utils.ts";
import type { TMADInner } from "./types.ts";

export const MADInner: TMADInner = (array) => {
  const median = quartileInner(array).Q2;

  const madArray = array.map<BI>((el) => {
    const [bi, fpe] = new PipeInner().sub([el, median]).calc();

    return bi < 0n ? [bi * -1n, fpe] : [bi, fpe];
  });

  const sorted = sortInner(madArray, ASC);

  return quartileInner(sorted).Q2;
};


import { subRoute } from "../mathOperations/sub/utils.ts";
import { mean } from "../mean/main.ts";
import { quartileInner } from "../quartile/utils.ts";
import { DEFAULT } from "../shared/constant.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { ASC } from "../sort/constants.ts";
import { sortInner } from "../sort/utils.ts";
import type { TMADQ2 } from "./types.ts";

export const MADQ2: TMADQ2 = (array) => {
  const meanOfAnArray = mean(array);
  const madArray = array
    .map((element) => {
      const res = subRoute([s2a(element), s2a(meanOfAnArray)], DEFAULT);
      res.isNegative = false;

      return res;
    });
  const sorted = sortInner(madArray, ASC);

  return a2s(quartileInner(sorted).Q2);
};
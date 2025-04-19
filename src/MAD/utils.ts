import { subRoute } from "../mathOperations/sub/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import { DEFAULT } from "../shared/constant.ts";
import { ASC } from "../sort/constants.ts";
import { sortInner } from "../sort/utils.ts";
import type { TMADInner } from "./types.ts";

export const MADInner: TMADInner = (array) => {
  const median = quartileInner(array).Q2;

  const madArray = array.map((el) => {
    const res = subRoute(
      [structuredClone(el), structuredClone(median)],
      DEFAULT,
    );
    res.isNegative = false;

    return res;
  });

  const sorted = sortInner(madArray, ASC);

  return quartileInner(sorted).Q2;
};

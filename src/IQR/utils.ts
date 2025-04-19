import { isEqualInner } from "../compare/utils.ts";
import { MADInner } from "../MAD/utils.ts";
import { subRoute } from "../mathOperations/sub/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import { DEFAULT, NIL, ONE } from "../shared/constant.ts";
import type { TIQRInner } from "./types.ts";

export const MIN_LENGTH_FOR_MAD = 30;

export const IQRInner: TIQRInner = (array, sigNum = false) => {
  const { Q1, Q3 } = quartileInner(array);
  const sub = subRoute([structuredClone(Q3), structuredClone(Q1)], DEFAULT);

  if (sigNum) {
    const isEqual = isEqualInner({ left: Q3, right: Q1 });
    const MAD = MADInner(array);
    const nonNilMAD = isEqualInner({ left: MAD, right: NIL }) ? ONE : MAD;

    return isEqual ? nonNilMAD : sub;
  }

  return sub;
};

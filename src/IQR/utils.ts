import { isEqualInner } from "../compare/utils.ts";
import { MADInner } from "../MAD/utils.ts";
import { PipeInner } from "../pipe/utils.ts";

import { quartileInner } from "../quartile/utils.ts";
import { NIL, ONE } from "../shared/constant.ts";
import type { TIQRInner } from "./types.ts";

export const MIN_LENGTH_FOR_MAD = 30;

export const IQRInner: TIQRInner = (array, sigNum = false) => {
  const { Q1, Q3 } = quartileInner(array);
  const sub = new PipeInner().subInner([Q3, Q1]).result;

  if (sigNum) {
    const isEqual = isEqualInner({ left: Q3, right: Q1 });
    const MAD = MADInner(array);
    const nonNilMAD = isEqualInner({ left: MAD, right: NIL }) ? ONE : MAD;

    return isEqual ? nonNilMAD : sub;
  }

  return sub;
};

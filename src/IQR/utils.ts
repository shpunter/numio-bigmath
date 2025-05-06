import { isEqualInner } from "../compare/utils.ts";
import { MADInner } from "../MAD/utils.ts";
import { PipeInner } from "../pipe/utils.ts";

import { quartileInner } from "../quartile/utils.ts";
import type { BI } from "../shared/types.ts";
import type { TIQRInner } from "./types.ts";

export const MIN_LENGTH_FOR_MAD = 30;

export const IQRInner: TIQRInner = (array, sigNum = false) => {
  if (array.length < 3) {
    throw Error("To calculate IQR you need at least 3 elements");
  }

  const { Q1, Q3 } = quartileInner(array);
  const sub = new PipeInner().sub([Q3, Q1]).calc();

  if (sigNum) {
    const isEqual = isEqualInner({ left: Q3, right: Q1 });
    const MAD = MADInner(array);
    const isNil = isEqualInner({ left: MAD, right: [0n, 0] });
    const nonNilMAD: BI = isNil ? [1n, 0] : MAD;

    return isEqual ? nonNilMAD : sub;
  }

  return sub;
};

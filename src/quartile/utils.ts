import type { BI } from "../shared/types.ts";
import { calcInner, divInner } from "../shared/utils.ts";
import type { MeanQ, QuartileInner } from "./types.ts";

const meanQ: MeanQ = (idx, array) => {
  const left = calcInner([array[idx], array[idx - 1]], (a, b) => a + b);
  const right: BI = [2n, 0];

  return divInner([left, right], 20);
};

export const quartileInner: QuartileInner = (array) => {
  if (array.length < 3) {
    throw Error("To calculate quartile you need at least 3 elements");
  }

  const { length } = array;
  const Q2Idx = length >> 1;
  const Q1Idx = Q2Idx >> 1;
  const Q3Idx = length - Q1Idx;
  const isEvenHalf = Q2Idx % 2 !== 0;

  return {
    Q1: isEvenHalf ? array[Q1Idx] : meanQ(Q1Idx, array),
    Q2: length % 2 !== 0 ? array[Q2Idx] : meanQ(Q2Idx, array),
    Q3: isEvenHalf ? array[Q3Idx - 1] : meanQ(Q3Idx, array),
  };
};

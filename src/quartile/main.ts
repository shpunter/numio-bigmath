import { pipe } from "../pipe/main.ts";
import type { Mean, Quartile } from "./types.ts";

const mean: Mean = (idx, array) => {
  return pipe.add([array[idx], array[idx - 1]]).div(["2"]).calc();
};

export const quartile: Quartile = (array) => {
  if (array.length < 3) {
    throw Error("To calculate quartile you need at least 3 elements");
  }

  const { length } = array;
  const Q2Idx = length >> 1;
  const Q1Idx = Q2Idx >> 1;
  const Q3Idx = length - Q1Idx;
  const isEvenHalf = Q2Idx % 2 !== 0;

  return {
    Q1: isEvenHalf ? array[Q1Idx] : mean(Q1Idx, array),
    Q2: length % 2 !== 0 ? array[Q2Idx] : mean(Q2Idx, array),
    Q3: isEvenHalf ? array[Q3Idx - 1] : mean(Q3Idx, array),
  };
};

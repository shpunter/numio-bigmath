import type { BI } from "../shared/types.ts";
import { calcInner, divInner } from "../shared/utils.ts";
import type { MeanInner } from "./types.ts";

export const meanInner: MeanInner = (array) => {
  const left = calcInner(array, (a, b) => a + b);
  const right: BI = [BigInt(array.length), 0];

  return divInner([left, right], 20);
};

import { PipeInner } from "../pipe/utils.ts";
import { tryBigInt } from "../shared/utils.ts";
import type { MeanInner } from "./types.ts";

export const meanInner: MeanInner = (array) => {
  return new PipeInner().div([
    new PipeInner().add(array).bi, 
    [tryBigInt(array.length), 0]
  ]).bi;
};

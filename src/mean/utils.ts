import { PipeInner } from "../pipe/utils.ts";
import type { BI } from "../shared/types.ts";
import type { MeanInner } from "./types.ts";

export const meanInner: MeanInner = (array) => {
  const left = new PipeInner().add(array).calc();
  const right: BI = [BigInt(array.length), 0];

  return new PipeInner().div([left, right]).calc();
};

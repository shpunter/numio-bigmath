import { addRoute } from "../operations/add/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import { DEFAULT } from "../shared/constant.ts";
import { s2a } from "../shared/utils.ts";
import type { MeanInner } from "./types.ts";

export const meanInner: MeanInner = (array) => {
  const left = addRoute(array, DEFAULT);
  const right = s2a(array.length.toString());

  return new PipeInner().divInner([left, right]).result;
};

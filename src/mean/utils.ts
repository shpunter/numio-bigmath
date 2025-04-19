import { addRoute } from "../mathOperations/add/utils.ts";
import { divInner } from "../mathOperations/div/utils.ts";
import { DEFAULT } from "../shared/constant.ts";
import { s2a } from "../shared/utils.ts";
import type { MeanInner } from "./types.ts";

export const meanInner: MeanInner = (array) => {
  const left = addRoute(array, DEFAULT);
  const right = s2a(array.length.toString());

  const res = divInner(
    [left.array, left.intLength],
    [right.array, right.intLength],
    left.isNegative !== right.isNegative,
    20,
  );

  return res;
};

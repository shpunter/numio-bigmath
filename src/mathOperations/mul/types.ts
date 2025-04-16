import type { InputData } from "../../types.ts";

export type MulInner = (
  arrL: [number[], number],
  arrR: [number[], number],
  isNegative: boolean,
) => InputData;

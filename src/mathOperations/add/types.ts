import type { InputData } from "../../types.ts";

export type AddInner = (
  L: [number[], number],
  R: [number[], number],
  isNegative: boolean,
) => InputData;

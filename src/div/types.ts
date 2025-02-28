import type { InputData } from "../types.ts";

export type Division = (
  L: [number[], number],
  R: [number[], number],
  isNegative: boolean,
  initLimit: number
) => InputData;

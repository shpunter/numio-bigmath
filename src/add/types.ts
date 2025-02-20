import type { InputData } from "../types.ts";

export type Addition = (
  L: [number[], number],
  R: [number[], number],
  isNegative: boolean
) => InputData;
import type { InputData } from "../../types.ts";

export type Division = (
  L: [number[], number],
  R: [number[], number],
  isNegative: boolean,
  initLimit: number,
) => InputData;

export type DivRoute = (
  input: InputData[],
  initValue: InputData,
  limit: number,
) => InputData;

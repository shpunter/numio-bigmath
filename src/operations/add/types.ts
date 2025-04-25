import type { InputData } from "../../types.ts";

export type AddInner = (
  L: [number[], number],
  R: [number[], number],
  isNegative: boolean,
) => InputData;

export type FillHead = (
  len: number,
  fpe: number,
  isNeg: boolean,
  hasBefore: boolean,
) => string;

export type TrimTail = (str: string) => string;

export type Add = (input: string[]) => string;

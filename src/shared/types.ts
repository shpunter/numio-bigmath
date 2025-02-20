import type { InputData } from "../types.ts";

export type A2S = (
  array: number[],
  isFloat: boolean,
  isNegative?: boolean,
) => string;

export type S2ASA = (
  string: string,
) => InputData;

export type S2AMD = (
  strings: string,
) => InputData;

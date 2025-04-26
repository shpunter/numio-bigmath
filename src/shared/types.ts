import type { InputData } from "../types.ts";

export type A2S = (input: InputData) => string;

export type S2A = (
  strings: string,
) => InputData;

export type Convert = (
  isNegative: InputData["isNegative"],
  array: InputData["array"],
) => string;

export type CloneInner = (inner: InputData) => InputData;

export type FillHead = (
  len: number,
  fpe: number,
  isNeg: boolean,
  hasBefore: boolean,
) => string;

export type TrimTail = (str: string) => string;

export type CalcInner = (
  array: string[],
  op: (a: bigint, b: bigint) => bigint,
) => [bigint, number];

export type DivInner = (
  array: string[],
  limit: number
) => [bigint, number];

export type BI2S = (bigInt: bigint, fpe: number) => string;

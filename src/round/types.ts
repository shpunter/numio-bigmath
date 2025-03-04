import type { ROUND_MODE } from "./constants.ts";

export type Round = (
  value: string,
  options?: {
    decimals?: number;
    roundMode?: RoundMode;
    sigFig?: boolean;
  },
) => string;

export type RoundMode = typeof ROUND_MODE[number];

export type HandleTail = (array: number[], isFloat: boolean) => void;

export type HandleCarryOver = (
  array: number[],
  isFloat: boolean,
) => [number[], boolean];

export type CalcLast = (
  current: number,
  next: number,
  roundMode: RoundMode,
) => [number, boolean];

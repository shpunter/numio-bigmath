import type { BI } from "../shared/types.ts";

export type CbrtInner = (
  value: BI,
  prec?: BI,
  max?: number,
) => [BI, number];

export type Cbrt = (value: string, precision?: string) => string; 
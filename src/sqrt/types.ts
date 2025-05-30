import type { BI } from "../shared/types.ts";

export type SqrtInner = (
  value: BI,
  prec?: BI,
  max?: number,
) => [BI, number];

export type Sqrt = (value: string, precision?: string) => string; 
import type { BI } from "../shared/types.ts";

export type SqrtInner = (
  input: BI,
  prec?: BI,
  max?: number,
) => [BI, number];

export type Sqrt = (str: string, precision?: string) => string; 
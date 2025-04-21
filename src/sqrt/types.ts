import type { InputData } from "../types.ts";

export type SqrtInner = (
  input: InputData,
  prec?: InputData,
  max?: number,
) => [InputData, number];

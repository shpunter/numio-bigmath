import type { InputData } from "../types.ts";

export type CompareRawFn = (
  left: InputData,
  right: InputData,
) => [InputData, boolean];

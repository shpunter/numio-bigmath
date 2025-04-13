import type { InputData } from "../types.ts";

export type CompareRawFn = (
  left: InputData,
  right: InputData,
) => [InputData, boolean];

export type Min = (strs: string[]) => string;
export type Max = (strs: string[]) => string;
export type MinRawFn = (array: InputData[]) => InputData;
export type MaxRawFn = (array: InputData[]) => InputData;

import type { InputData } from "../types.ts";

export type CompareInner = (
  left: InputData,
  right: InputData,
) => [InputData, boolean];

export type Min = (strs: string[]) => string;
export type Max = (strs: string[]) => string;
export type MinInner = (array: InputData[]) => InputData;
export type MaxInner = (array: InputData[]) => InputData;

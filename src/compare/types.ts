import type { InputData } from "../types.ts";

export type Min = (strs: string[]) => string;
export type Max = Min;
export type IsLeftGreater = (attr: { left: string; right: string }) => boolean;
export type IsEqual = IsLeftGreater;

export type CompareInner = (
  left: InputData,
  right: InputData,
) => [InputData, number];

export type MinInner = (array: InputData[]) => InputData;
export type MaxInner = MinInner;
export type IsEqualInner = (
  attr: { left: InputData; right: InputData },
) => boolean;
export type IsLeftGreaterInner = IsEqualInner;

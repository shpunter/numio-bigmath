import type { BI } from "../shared/types.ts";

export type Min = (strs: string[]) => string;
export type Max = Min;
export type IsLeftGreater = (arg: { left: string; right: string }) => boolean;
export type IsEqual = (arg: { left: string; right: string }) => boolean;
export type IsLeftGreaterOrEqual = (arg: { left: string; right: string }) => boolean;

export type CompareInner = (left: BI, right: BI) => [BI, number];
export type MinInner = (array: BI[]) => BI;
export type MaxInner = MinInner;
export type IsEqualInner = (arg: { left: BI; right: BI }) => boolean;
export type IsLeftGreaterInner = IsEqualInner;
export type IsLeftGreaterOrEqualInner = IsEqualInner;


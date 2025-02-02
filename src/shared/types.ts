export type A2S = (
  array: number[],
  isFloat: boolean,
  isNegative?: boolean,
) => string;

export type S2ASA = (strings: string[]) => [
  { array: number[]; int: number; isNegative: boolean },
  { array: number[]; int: number; isNegative: boolean },
  boolean,
];

export type S2AMD = (
  strings: string[],
) => [
  { array: number[]; dec: number; isNegative: boolean },
  { array: number[]; dec: number; isNegative: boolean },
];

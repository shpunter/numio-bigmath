export type A2S = (
  array: number[],
  isFloat: boolean,
  isNegative?: boolean,
) => string;

export type S2ASA = (
  string: string,
) => { array: number[]; int: number; isNegative: boolean; isFloat: boolean };

export type S2AMD = (
  strings: string,
) => { array: number[]; dec: number; isNegative: boolean };

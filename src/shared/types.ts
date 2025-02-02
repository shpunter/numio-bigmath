export type A2S = (
  array: number[],
  isFloat: boolean,
  isNegative?: boolean,
) => string;

export type S2ASA = (strings: string[]) => [
  { array: number[]; int: number; negative: 1 | 0 },
  { array: number[]; int: number; negative: 1 | 0 },
  boolean,
];

export type S2AMD = (
  strings: string[],
  shiftCO?: 1 | 0,
) => [[number[], number], [number[], number]];

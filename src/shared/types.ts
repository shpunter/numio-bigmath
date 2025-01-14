export type A2S = (
  array: number[],
  isFloat: boolean,
) => string;

export type S2ASA = (
  strings: string[],
  shiftCO?: 1 | 0,
) => [[number[], number], [number[], number], boolean];

export type S2AMD = (
  strings: string[],
  shiftCO?: 1 | 0,
) => [[number[], number], [number[], number]];

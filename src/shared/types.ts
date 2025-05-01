export type BI = [bigint, number];

export type FillHead = (
  len: number,
  fpe: number,
  isNeg: boolean,
  hasBefore: boolean,
) => string;

export type TrimTail = (str: string) => string;

export type CalcInner = (
  array: BI[],
  op: (a: bigint, b: bigint) => bigint,
  def?: BI,
) => BI;

export type BI2S = (bigInt: bigint, fpe: number) => string;
export type S2BI = (str: string) => BI;

import type { BI } from "../shared/types.ts";

export type Quartile = (array: string[]) => {
  Q1: string;
  Q2: string;
  Q3: string;
};

export type MeanQ = (index: number, array: BI[]) => BI;
export type QuartileInner = (array: BI[]) => {
  Q1: BI;
  Q2: BI;
  Q3: BI;
};

import type { InputData } from "../types.ts";

export type Quartile = (array: string[]) => {
  Q1: string;
  Q2: string;
  Q3: string;
};

export type MeanQ = (index: number, array: InputData[]) => InputData;
export type QuartileInner = (array: InputData[]) => {
  Q1: InputData;
  Q2: InputData;
  Q3: InputData;
};

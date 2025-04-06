export type Quartile = (array: string[]) => {
  Q1: string;
  Q2: string;
  Q3: string;
};

export type Mean = (index: number, array: string[]) => string;

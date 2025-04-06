export type InputData = {
  array: number[];
  intLength: number;
  isNegative: boolean;
  isFloat: boolean;
};

export type Route = (input: InputData[], initValue: InputData) => InputData;

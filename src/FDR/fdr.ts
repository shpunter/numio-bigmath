import { s2bi } from "../shared/utils.ts";

export const FDR = (array: string[], maxBars = 100) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }
};

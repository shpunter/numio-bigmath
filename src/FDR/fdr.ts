import { bi2s, s2bi } from "../shared/utils.ts";
import { fdrInner } from "./utils.ts";

export const FDR = (array: string[]) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const { binWidth, binsNum } = fdrInner(arrayInner);

  return {
    min: array[0],
    max: array[array.length - 1],
    binsNum: bi2s(binsNum),
    binWidth: bi2s(binWidth),
  };
};

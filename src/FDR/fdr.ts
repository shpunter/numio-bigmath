import { bi2s, s2bi } from "../shared/utils.ts";
import type { TFDR } from "./types.ts";
import { fdrInner } from "./utils.ts";

export const FDR: TFDR = (array, options) => {
  const arrayInner = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    arrayInner[i] = s2bi(array[i]);
  }

  const { binWidth, binsNum } = fdrInner(arrayInner, {
    useMadAbove: options?.useMadAbove ?? 0,
    maxBinNumber: options?.maxBinNumber ?? 90,
    madFrom: options?.madFrom ?? "median",
  });

  return {
    binsNum: bi2s(binsNum),
    binWidth: bi2s(binWidth),
  };
};

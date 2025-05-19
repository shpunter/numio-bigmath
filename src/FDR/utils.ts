import { cbrtInner } from "../cbrt/utils.ts";
import { IQRInner } from "../IQR/utils.ts";
import { MADInner } from "../MAD/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import type { BI } from "../shared/types.ts";
import { tryBigInt } from "../shared/utils.ts";

export const fdrInner = (
  array: BI[],
  options = { useMadForLen: 30, nonNilIQR: true },
) => {
  const mad = MADInner(array);
  const nonNilMad: BI = mad[0] <= 0n ? [1n, 0] : mad;
  const IQR = IQRInner(array, options.nonNilIQR);
  const adjIQR = array.length < options.useMadForLen ? nonNilMad : IQR;
  const [cbrtLen] = cbrtInner([tryBigInt(array.length), 0]);
  const binWidth = new PipeInner().mul([[2n, 0], adjIQR]).div([cbrtLen]).bi;
  const min = array[0];
  const max = array[array.length - 1];
  const binsNum = new PipeInner().sub([max, min]).div([binWidth], 20).bi;
  const rounded: BI = binsNum[1] > 0
    ? [(binsNum[0] / BigInt(1e+20)) + 1n, 0]
    : binsNum;

  return {
    binWidth,
    binsNum: rounded,
  };
};

type Options = {
  useMadForLen: number;
  nonNilIQR: boolean;
};

type FDRInner = (array: BI[], options: Options) => {
  binWidth: BI;
  binsNum: BI;
};

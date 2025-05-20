import { cbrtInner } from "../cbrt/utils.ts";
import { isLeftGreaterOrEqualInner } from "../compare/utils.ts";
import { IQRInner } from "../IQR/utils.ts";
import { MADInner } from "../MAD/utils.ts";
import { divInner } from "../operations/div/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import type { BI } from "../shared/types.ts";
import { tryBigInt } from "../shared/utils.ts";
import type { FDRInner } from "./types.ts";

const getBinsNum = (range: BI, binWidth: BI): BI => {
  let binNum = new PipeInner().div([range, binWidth], 10).bi;

  if (binNum[1] > 0) {
    binNum = [new PipeInner().div([range, binWidth], 0).bi[0] + 1n, 0];
  }

  return binNum;
};

export const fdrInner: FDRInner = (
  array,
  options = { useMadAbove: 0, maxBinNumber: 90, madFrom: "mean" },
) => {
  const mad = MADInner(array, { from: options.madFrom });
  const nonNilMad: BI = mad[0] <= 0n ? [1n, 0] : mad;
  const IQR = IQRInner(array);
  const isMadUsed = array.length < options.useMadAbove || IQR[0] === 0n;
  const validIQR = isMadUsed ? nonNilMad : IQR;
  const [cbrtLen] = cbrtInner([tryBigInt(array.length), 0]);
  const binWidth = new PipeInner().mul([[2n, 0], validIQR]).div([cbrtLen]).bi;
  const range = new PipeInner().sub([array[array.length - 1], array[0]]).bi;
  const binNum = getBinsNum(range, binWidth);
  const maxBinNum: BI = [tryBigInt(options.maxBinNumber), 0];
  const scale: BI =
    isLeftGreaterOrEqualInner({ left: binNum, right: maxBinNum })
      ? divInner([binNum, maxBinNum], 20)
      : [1n, 0];

  const scaledBinWidth = new PipeInner().mul([binWidth, scale]).bi;

  return {
    binWidth: scaledBinWidth,
    binNum: getBinsNum(range, scaledBinWidth),
  };
};

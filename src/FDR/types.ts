import type { MADFrom } from "../MAD/types.ts";
import type { BI } from "../shared/types.ts";
type Options = {
  useMadAbove?: number;
  maxBinNumber?: number;
  madFrom?: MADFrom;
};

type OptionsInner = {
  useMadAbove: number;
  maxBinNumber: number;
  madFrom: MADFrom;
};

export type FDRInner = (array: BI[], options: OptionsInner) => {
  binWidth: BI;
  binNum: BI;
};

export type TFDR = (array: string[], options?: Options) => {
  binWidth: string;
  binNum: string;
};

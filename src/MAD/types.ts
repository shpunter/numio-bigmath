import type { BI } from "../shared/types.ts";

export type MADFrom = "mean" | "median";

type Options = { from: MADFrom };

export type TMAD = (array: string[], options?: Options) => string;
export type TMADInner = (array: BI[], options: Options) => BI;

import type { BI } from "../shared/types.ts";

export type ModOptions = {
  precision: number;
};

export type Mod = (left: string, right: string, options?: ModOptions) => string;

export type ModInner = (left: BI, right: BI, options: ModOptions) => BI;

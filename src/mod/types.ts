import type { BI } from "../shared/types.ts";

export type Mod = (left: string, right: string) => string;

export type ModInner = (left: BI, right: BI) => BI;

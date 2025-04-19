import type { InputData } from "../types.ts";

export type TMAD = (array: string[]) => string;
export type TMADInner = (array: InputData[]) => InputData;

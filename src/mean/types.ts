import type { InputData } from "../types.ts";

export type Mean = (array: string[]) => string;
export type MeanInner = (array: InputData[]) => InputData;

import type { InputData } from "../types.ts";

export type TIQR = (array: string[], sigNum?: boolean) => string;
export type TIQRInner = (array: InputData[], sigNum?: boolean) => InputData;

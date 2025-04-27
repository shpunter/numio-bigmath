import type { BI } from "../shared/types.ts";

export type TIQR = (array: string[], sigNum?: boolean) => string;
export type TIQRInner = (array: BI[], sigNum?: boolean) => BI;

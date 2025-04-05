import type { InputData } from "../types.ts";

export type A2S = (input: InputData) => string;

export type S2A = (
  strings: string,
) => InputData;

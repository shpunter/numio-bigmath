import { DEFAULT } from "../shared/constant.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { mulRoute } from "./utils.ts";

/** This function multiplies numbers (as string). */
export const mul = (strs: string[]): string => {
  return a2s(mulRoute(strs.map((str) => s2a(str)), DEFAULT));
};

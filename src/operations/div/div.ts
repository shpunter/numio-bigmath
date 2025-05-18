import { bi2s, s2bi } from "../../shared/utils.ts";
import { divInner } from "./utils.ts";

/** This function should divide numbers (as string). */
export const div = (array: string[], precision = 20): string => {
  const arrayInner = array.map((str) => s2bi(str));
  const bi = divInner(arrayInner, precision ?? 20);

  return bi2s(bi);
};

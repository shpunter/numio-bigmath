import { a2s, s2aSA } from "../shared/utils.ts";
import { addition } from "./utils.ts";

/** This function adds 2 numbers (as string). */
export const add = (strL: string, strR: string): string => {
  const [left, right, isFloat] = s2aSA([strL, strR], 1);
  const array = addition(left, right);

  return a2s(array, isFloat);
};

import { a2s, s2aMD } from "../shared/utils.ts";
import { division } from "./utils.ts";

/** This function should divide 2 numbers (as string). */
export const div = (strL: string, strR: string, limit = 20): string => {
  if (strL === "0") return "0";

  const [left, right] = s2aMD([strL, strR]);
  const [array, isFloat] = division(left, right, limit);

  return (array[0] === 46 ? "0" : "") + a2s(array, isFloat);
};
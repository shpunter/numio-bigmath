import { a2s, s2aMD } from "../shared/utils.ts";
import { division } from "./utils.ts";

/** This function should divide 2 numbers (as string). */
export const div = (strL: string, strR: string, limit = 20): string => {
  if (strL === "0") return strL;

  const left = s2aMD(strL);
  const right = s2aMD(strR);
  const [array, isFloat] = division(
    [left.array, left.intLength],
    [right.array, right.intLength],
    limit,
  );

  return a2s(array, isFloat, left.isNegative !== right.isNegative) || "0";
};

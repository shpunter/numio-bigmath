import { a2s, s2aMD } from "../shared/utils.ts";
import { division } from "./utils.ts";

/** This function should divide 2 numbers (as string). */
export const div = (strL: string, strR: string, limit = 20): string => {
  if (strL === "0") return "0";

  const left = s2aMD(strL);
  const right = s2aMD(strR);
  const [array, isFloat] = division(
    [left.array, left.dec],
    [right.array, right.dec],
    limit,
  );

  return a2s(array, isFloat, left.isNegative !== right.isNegative) || "0";
};

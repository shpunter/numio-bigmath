import { createString } from "../shared/utils.ts";
import { division } from "./utils.ts";

/** This function should divide 2 numbers (as string). */
export const div = (left: string, right: string, limit = 20) => {
  if (left === "0") return "0";

  let decL = 0;
  let decR = 0;
  const arrL: number[] = [];
  const arrR: number[] = [];

  for (let i = 0; i < left.length; i++) {
    const charCode = left.charCodeAt(i);

    if (arrL.length === 0 && charCode === 48) continue;
    if (charCode === 46) {
      decL += left.length - 1 - i;
      continue;
    }

    arrL.push(charCode - 48);
  }

  for (let i = 0; i < right.length; i++) {
    const charCode = right.charCodeAt(i);

    if (arrR.length === 0 && charCode === 48) continue;
    if (charCode === 46) {
      decR += right.length - 1 - i;
      continue;
    }

    arrR.push(charCode - 48);
  }

  const [array, isFloat] = division([arrL, decL], [arrR, decR], limit);

  return (array[0] === 46 ? "0" : "") + createString(0, array, isFloat);
};

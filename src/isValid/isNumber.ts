import { isBinary } from "./isBinary.ts";
import { isDecimal } from "./isDecimal.ts";
import { isHex } from "./isHex.ts";
import { isOctal } from "./isOctal.ts";
import type { IsValid } from "./types.ts";

export const isNumber: IsValid = (str) => {
  return isBinary(str) || isHex(str) || isOctal(str) || isDecimal(str);
};

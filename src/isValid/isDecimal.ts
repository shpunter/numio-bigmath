import type { IsValid } from "./types.ts";

export const isDecimal: IsValid = (str) => {
  return /^-?(?![\.])\d+(\.\d+)?$/.test(str);
};

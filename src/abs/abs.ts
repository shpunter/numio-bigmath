import { bi2s, s2bi } from "../shared/utils.ts";
import type { Abs } from "./types.ts";
import { absInner } from "./utils.ts";

/** Get absolute value of a number */
export const abs: Abs = (value) => {
  const bi = absInner(s2bi(value));

  return bi2s(bi);
};

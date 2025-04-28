import { bi2s, s2bi } from "../shared/utils.ts";
import type { Abs } from "./types.ts";
import { absInner } from "./utils.ts";

export const abs: Abs = (value) => {
  const [bi, fpe] = absInner(s2bi(value));

  return bi2s(bi, fpe);
};

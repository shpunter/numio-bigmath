import { bi2s, s2bi } from "../shared/utils.ts";
import { modInner } from "./utils.ts";
import type { Mod } from "./types.ts";

export const mod: Mod = (left, right, options = { precision: 20 }) => {
  const bi = modInner(s2bi(left), s2bi(right), options);

  return bi2s(bi);
};

import { bi2s, s2bi } from "../shared/utils.ts";
import { modInner } from "./utils.ts";
import type { Mod } from "./types.ts";

export const mod: Mod = (left, right) => {
  const bil = s2bi(left);
  const bir = s2bi(right);

  if (bil[1] > 0) throw new Error(`${left} is not valid. It should be integer to take a modulo`);
  if (bir[1] > 0) throw new Error(`${right} is not valid. It should be integer to take a modulo`);

  return bi2s(modInner(bil, bir));
};

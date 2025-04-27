import { round } from "../round/main.ts";
import { bi2s, s2bi } from "../shared/utils.ts";
import type { Sqrt } from "./types.ts";
import { sqrtInner } from "./utils.ts";

/** Find square root of a number */
export const sqrt: Sqrt = (str, precision) => {
  const inputInner = s2bi(str);
  const [[bi, fpe], decimals] = sqrtInner(
    inputInner,
    precision ? s2bi(precision) : undefined,
  );
  const outputStr = bi2s(bi, fpe);

  return round(outputStr, { decimals });
};

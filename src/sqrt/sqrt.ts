import { round } from "../round/round.ts";
import { bi2s, s2bi } from "../shared/utils.ts";
import type { Sqrt } from "./types.ts";
import { sqrtInner } from "./utils.ts";

/** Find square root of a number */
export const sqrt: Sqrt = (value, precision) => {
  const valueInner = s2bi(value);
  const [bi, decimals] = sqrtInner(
    valueInner,
    precision ? s2bi(precision) : undefined,
  );

  return round(bi2s(bi), { decimals });
};

import { round } from "../round/round.ts";
import { bi2s, s2bi } from "../shared/utils.ts";
import type { Cbrt } from "./types.ts";
import { cbrtInner } from "./utils.ts";

/** Find cube root of a number */
export const cbrt: Cbrt = (value, precision) => {
  const valueInner = s2bi(value);
  const [bi, decimals] = cbrtInner(
    valueInner,
    precision ? s2bi(precision) : undefined,
  );

  return round(bi2s(bi), { decimals });
};

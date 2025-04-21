import { round } from "../round/main.ts";
import { a2s, s2a } from "../shared/utils.ts";
import type { Sqrt } from "./types.ts";
import { sqrtInner } from "./utils.ts";

/** Find square root of a number */
export const sqrt: Sqrt = (str, precision) => {
  const inputInner = s2a(str);

  const [outputInner, decimals] = sqrtInner(
    inputInner,
    precision ? s2a(precision) : undefined,
  );
  const outputStr = a2s(outputInner);

  return round(outputStr, { decimals: decimals + 1 });
};

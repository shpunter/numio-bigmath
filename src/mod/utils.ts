import type { BI } from "../shared/types.ts";
import type { ModInner } from "./types.ts";

export const modInner: ModInner = (left: BI, right: BI): BI => {
  return [((left[0] % right[0]) + right[0]) % right[0], 0];
};

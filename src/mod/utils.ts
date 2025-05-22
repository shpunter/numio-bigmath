import { divInner } from "../operations/div/utils.ts";
import { tryBigInt } from "../shared/utils.ts";
import type { BI } from "../shared/types.ts";
import type { ModInner } from "./types.ts";

export const modInner: ModInner = (left: BI, right: BI, { precision }): BI => {
  const bi = divInner([left, right], precision);

  return bi[1] === 0 ? [0n, 0] : [bi[0] % (10n ** tryBigInt(bi[1])), 0];
};

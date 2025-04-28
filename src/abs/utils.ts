import type { AbsInner } from "./types.ts";

export const absInner: AbsInner = ([bi, fpe]) => {
  return [bi < 0n ? bi * -1n : bi, fpe];
};

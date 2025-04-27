import type { BI } from "../../shared/types.ts";

export type DivInner = (
  array: BI[],
  limit: number,
  def?: BI
) => BI;

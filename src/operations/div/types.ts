import type { BI } from "../../shared/types.ts";

export type DivInner = (
  array: BI[],
  precision: number,
  def?: BI
) => BI;

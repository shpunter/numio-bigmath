import { PipeInner } from "../pipe/utils.ts";
import { quartileInner } from "../quartile/utils.ts";
import type { TIQRInner } from "./types.ts";

export const IQRInner: TIQRInner = (array) => {
  if (array.length < 3) {
    throw Error("To calculate IQR you need at least 3 elements");
  }

  const { Q1, Q3 } = quartileInner(array);
  const { bi: sub } = new PipeInner().sub([Q3, Q1]);

  return sub;
};

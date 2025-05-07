import { s2bi } from "../shared/utils.ts";
import type { ToBase } from "./types.ts";

/** Convert number to another base */
export const toBase: ToBase = ({ value, toBase }) => {
  const [bi] = s2bi(value);
  const isNegative = value[0] === "-";

  const map = {
    2: "0b",
    8: "0o",
    10: "",
    16: "0x",
  };

  return (isNegative ? "-" : "") + map[toBase] +
    (isNegative ? -1n * bi : bi).toString(toBase).toUpperCase();
};

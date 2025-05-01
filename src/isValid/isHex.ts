import type { IsValid } from "./types.ts";

export const isHex: IsValid = (str) => {
  return /^-?(0x)[0-9a-fA-F]+$/i.test(str);
};

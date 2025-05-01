import type { IsValid } from "./types.ts";

export const isOctal: IsValid = (str) => {
  return /^-?(0o)[0-7]+$/i.test(str);
};

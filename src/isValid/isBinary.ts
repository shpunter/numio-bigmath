import type { IsValid } from "./types.ts";

export const isBinary: IsValid = (str) => {
  return /^-?(0b)[01]+$/i.test(str);
};

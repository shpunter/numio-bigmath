
import { DEFAULT } from "../../shared/constant.ts";
import { a2s, s2a } from "../../shared/utils.ts";
import { divRoute } from "./utils.ts";

/** This function should divide numbers (as string). */
export const div = (strs: string[], limit = 20): string => {
  if (strs[0] === "0") return strs[0];

  return a2s(divRoute(strs.map((str) => s2a(str)), DEFAULT, limit));
};

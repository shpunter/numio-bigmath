import { DEFAULT } from "../shared/constant.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { subRoute } from "./utils.ts";

/** This function subtracts numbers (as string). */
export function sub(strs: string[]): string {
  return a2s(subRoute(strs.map((str) => s2a(str)), DEFAULT));
}

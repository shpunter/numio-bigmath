
import { DEFAULT } from "../../shared/constant.ts";
import { a2s, s2a } from "../../shared/utils.ts";
import { addRoute } from "./utils.ts";

/** This function adds numbers (as string). */
export function add(strs: string[]): string {
  return a2s(addRoute(strs.map((str) => s2a(str)), DEFAULT));
}

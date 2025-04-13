import { pipe } from "../pipe/main.ts";
import type { Mean } from "./types.ts";

/** This function returns mean of an array. */
export const mean: Mean = (array) => {
  return pipe.add(array).div([array.length.toString()]).calc();
};

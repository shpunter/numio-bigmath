import { bi2s, divInner } from "../../shared/utils.ts";

/** This function should divide numbers (as string). */
export const div = (input: string[], limit = 20): string => {
  const [bigInt, fpe] = divInner(input, limit ?? 20);

  return bi2s(bigInt, fpe);
};

console.log(div(["0.004", "0.002"]));

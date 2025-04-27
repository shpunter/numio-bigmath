import { bi2s, divInner, s2bi } from "../../shared/utils.ts";

/** This function should divide numbers (as string). */
export const div = (array: string[], limit = 20): string => {
  const arrayInner = array.map((str) => s2bi(str));
  const [bigInt, fpe] = divInner(arrayInner, limit ?? 20);

  return bi2s(bigInt, fpe);
};

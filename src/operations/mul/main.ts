import { bi2s, calcInner } from "../../shared/utils.ts";

/** This function multiplies numbers (as string). */
export const mul = (input: string[]): string => {
    const [bigInt, fpe] = calcInner(input, (a, b) => a * b);
  
    return bi2s(bigInt, fpe);
};
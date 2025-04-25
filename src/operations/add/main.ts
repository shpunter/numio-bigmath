import type { Add } from "./types.ts";
import { fillHead, trimTail } from "./utils.ts";

/** This function adds numbers (as string). */
export const add: Add = (input) => {
  let sum = 0n;
  let fpe = 0;

  for (let i = 0; i < input.length; i++) {
    const target = input[i];
    const fpi = target.indexOf(".");

    if (fpi === -1 && fpe === 0) {
      sum += BigInt(target);
      continue;
    }

    const dpLen = fpi === -1 ? 0 : target.length - 1 - fpi;

    const str = fpi >= 0
      ? target.slice(0, fpi) + target.slice(fpi + 1)
      : target;

    if (fpe < dpLen) {
      const fpDiff = dpLen - fpe;
      sum = sum * (10n ** BigInt(fpDiff)) + BigInt(str);
    }

    if (fpe > dpLen) {
      sum += BigInt(str) * (10n ** BigInt(fpe - dpLen));
    }

    if (fpe === dpLen) sum += BigInt(str);
    if (fpe < dpLen) fpe = dpLen;
  }

  const isNeg = sum < 0;
  isNeg && (sum *= -1n);

  const dp = sum % (10n ** BigInt(fpe));
  const str = sum.toString();
  let fpIdx = str.length - fpe;

  if (fpIdx < 0) fpIdx = 0;

  const before = str.slice(0, fpIdx);
  const after = str.slice(fpIdx);

  if (before) {
    return fillHead(str.length, fpe, isNeg, true) +
      (fpe > 0 && dp > 0 ? trimTail(`${before}.${after}`) : before);
  }

  return `${fillHead(str.length, fpe, isNeg, false)}${trimTail(after)}`;
};

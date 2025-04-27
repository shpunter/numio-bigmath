import type { BI2S, CalcInner, FillHead, S2BI, TrimTail } from "./types.ts";

export const bi2s: BI2S = (bigInt, fpe) => {
  if (bigInt === 0n) return "0";

  const isNeg = bigInt < 0n;
  isNeg && (bigInt *= -1n);

  const dp = bigInt % (10n ** BigInt(fpe));
  const bigStr = bigInt.toString();
  let fpIdx = bigStr.length - fpe;

  if (fpIdx < 0) fpIdx = 0;

  const before = bigStr.slice(0, fpIdx);
  const after = bigStr.slice(fpIdx);

  if (before) {
    return fillHead(bigStr.length, fpe, isNeg, true) +
      (fpe > 0 && dp > 0 ? trimTail(`${before}.${after}`) : before);
  }

  return `${fillHead(bigStr.length, fpe, isNeg, false)}${trimTail(after)}`;
};

export const s2bi: S2BI = (str) => {
  const fpi = str.indexOf(".");

  if (fpi === -1) return [BigInt(str), 0];

  return [
    BigInt(str.slice(0, fpi) + str.slice(fpi + 1)),
    fpi === -1 ? 0 : str.length - 1 - fpi,
  ] as const;
};

export const calcInner: CalcInner = (array, op, def) => {
  let bigInt = def ? def[0] : array[0][0];
  let fpe = def ? def[1] : array[0][1];
  const opm = op(1n, 1n);

  for (let i = def ? 0 : 1; i < array.length; i++) {
    const [bigCurrent, dpLen] = array[i];

    if (dpLen === 0 && fpe === 0) {
      bigInt = op(bigInt, bigCurrent);
      continue;
    }

    if (opm === 1n) {
      bigInt = op(bigInt, bigCurrent);
      fpe += dpLen;
    } else {
      if (fpe < dpLen) {
        const fpDiff = dpLen - fpe;
        bigInt = op(bigInt * (10n ** BigInt(fpDiff)), bigCurrent);
      }

      if (fpe > dpLen) {
        bigInt = op(bigInt, bigCurrent * (10n ** BigInt(fpe - dpLen)));
      }

      if (fpe === dpLen) bigInt = op(bigInt, bigCurrent);
      if (fpe < dpLen) fpe = dpLen;
    }
  }

  return [bigInt, fpe] as const;
};

export const fillHead: FillHead = (len, fpe, isNeg, hasBefore) => {
  let head = (isNeg ? "-" : "") + (hasBefore ? "" : "0.");

  while (len < fpe) {
    head = head + "0";
    len += 1;
  }

  return head;
};

export const trimTail: TrimTail = (str) => {
  if (str[str.length - 1] !== "0") return str;

  let count = 0;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== "0") return str.slice(0, str.length - count);

    count += 1;
  }

  return str;
};

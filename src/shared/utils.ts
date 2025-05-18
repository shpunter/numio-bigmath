import type { BI2S, CalcInner, FillHead, S2BI, TrimTail } from "./types.ts";
export const bi2s: BI2S = ([bigInt, fpe]) => {
  if (bigInt === 0n) return "0";

  const isNeg = bigInt < 0n;
  isNeg && (bigInt *= -1n);

  const dp = bigInt % (10n ** tryBigInt(fpe));
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

export const s2bi: S2BI = (str, _fpi) => {
  const fpi = _fpi ?? str.indexOf(".");
  const isHex = str.startsWith("0x") || str.startsWith("-0x") ||
    str.startsWith("-0X") || str.startsWith("0X");
  const isOctal = str.startsWith("0o") || str.startsWith("-0o") ||
    str.startsWith("-0O") || str.startsWith("0O");
  const isBinary = str.startsWith("0b") || str.startsWith("-0b") ||
    str.startsWith("-0B") || str.startsWith("0B");

  if (fpi === -1 && !isHex && !isOctal && !isBinary) return [tryBigInt(str), 0];

  if (isHex || isBinary || isOctal) {
    const isNegative = str[0] === "-";
    const bi = tryBigInt(str.slice(isNegative ? 1 : 0));

    return [isNegative ? -1n * bi : bi, 0];
  }

  if (str.length < 15 && str[0] !== "0") {
    return [
      tryBigInt(tryNumber(str.slice(0, fpi) + str.slice(fpi + 1), str)),
      str.length - 1 - fpi,
    ];
  }

  return [
    tryBigInt(str.slice(0, fpi) + str.slice(fpi + 1)),
    str.length - 1 - fpi,
  ];
};

export const calcInner: CalcInner = (array, op, def) => {
  let totalBi = def ? def[0] : array[0][0];
  let totalFpe = def ? def[1] : array[0][1];
  const opm = op(1n, 1n);

  for (let i = def ? 0 : 1; i < array.length; i++) {
    const [bi, fpe] = array[i];

    if (fpe === 0 && totalFpe === 0) {
      totalBi = op(totalBi, bi);
      continue;
    }

    if (opm === 1n) {
      totalBi = op(totalBi, bi);
      totalFpe += fpe;
    } else {
      if (totalFpe < fpe) {
        const fpDiff = fpe - totalFpe;
        totalBi = op(totalBi * (10n ** tryBigInt(fpDiff)), bi);
      }

      if (totalFpe > fpe) {
        totalBi = op(totalBi, bi * (10n ** tryBigInt(totalFpe - fpe)));
      }

      if (totalFpe === fpe) totalBi = op(totalBi, bi);
      if (totalFpe < fpe) totalFpe = fpe;
    }
  }

  return [totalBi, totalFpe] as const;
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

export const tryBigInt = <T extends number | string>(value: T) => {
  let bi: bigint;

  try {
    bi = BigInt(value);
  } catch (_) {
    throw new Error(`Invalid input: ${value}`);
  }

  return bi;
};

export const tryNumber = (value: string, origin = value) => {
  const num = +value;

  if (Number.isNaN(num)) throw new Error(`Invalid input: ${origin}`);

  return num;
};

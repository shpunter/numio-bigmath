import type {
  A2S,
  BI2S,
  CalcInner,
  CloneInner,
  Convert,
  DivInner,
  FillHead,
  S2A,
  S2BI,
  TrimTail,
} from "./types.ts";

const convert: Convert = (isNegative, array) => {
  return (isNegative ? "-" : "") + String.fromCharCode(...array);
};

export const a2s: A2S = ({ array, isFloat, isNegative, intLength }) => {
  const result: number[] = [];
  let lastValuableIdx = array.length;
  const isNil = array.length === 1 && array[0] === 48;

  if (isNil) return convert(isNegative, array);

  if (isFloat) {
    let idx = array.length - 1;

    while (array[idx] === 48 && idx >= intLength) {
      lastValuableIdx = idx;
      idx -= 1;
    }
  }

  if (intLength !== array.length) {
    if (intLength <= 0) {
      result.push(48, 46);

      for (let i = intLength; i < 0; i++) {
        result.push(48);
      }

      for (let i = 0; i < lastValuableIdx; i++) {
        result.push(array[i]);
      }
    } else {
      for (let i = 0; i < lastValuableIdx; i++) {
        i === intLength && result.push(46);
        result.push(array[i]);
      }
    }

    return result.at(-1) === 46 ? "0" : convert(isNegative, result);
  }

  return convert(isNegative, array);
};

export const s2a: S2A = (string) => {
  const array = Array<number>(0);
  const isNegative = string.charCodeAt(0) === 45;
  const shift = isNegative ? 1 : 0;
  let dec = 0;
  const isNil = string.length === 1 && string.charCodeAt(0) === 48;
  const isNegNil = string.length === 2 && isNegative &&
    string.charCodeAt(1) === 48;

  if (isNil || isNegNil) {
    return {
      array: [48],
      intLength: 1,
      isNegative: isNegNil,
      isFloat: false,
    };
  }

  for (let idx = 0 + shift; idx < string.length; idx++) {
    const charCode = string.charCodeAt(idx);

    if (array.length === 0 && charCode === 48) continue;
    if (charCode === 46) {
      dec = string.length - 1 - idx;
      continue;
    }

    array.push(charCode);
  }

  return {
    array,
    intLength: array.length - dec,
    isNegative,
    isFloat: dec > 0,
  };
};

export const cloneInner: CloneInner = (inner) => {
  const len = inner.array.length;
  const clone = Array(len);

  for (let i = 0; i < len; i++) {
    clone[i] = inner.array[i];
  }

  return {
    intLength: inner.intLength,
    isFloat: inner.isFloat,
    isNegative: inner.isNegative,
    array: clone,
  };
};

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

export const calcInner: CalcInner = (array, op) => {
  let bigInt = 0n;
  let fpe = 0;
  const opm = op(1n, 1n);

  for (let i = 0; i < array.length; i++) {
    const [bigCurrent, dpLen] = array[i];

    // const current = array[i];
    // const fpi = current.indexOf(".");

    if (dpLen === 0 && fpe === 0) {
      if (i === 0) bigInt = bigCurrent;
      else bigInt = op(bigInt, bigCurrent);
      continue;
    }

    // const dpLen = fpi === -1 ? 0 : current.length - 1 - fpi;
    // const bigStr = fpi >= 0
    //   ? current.slice(0, fpi) + current.slice(fpi + 1)
    //   : current;

    if (opm === 1n) {
      if (i === 0) {
        bigInt = bigCurrent;
        fpe += dpLen;
        continue;
      }

      bigInt = op(bigInt, bigCurrent);
      fpe += dpLen;
    } else {
      if (i === 0) {
        bigInt = bigCurrent;
        if (fpe < dpLen) fpe = dpLen;
        continue;
      }

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

export const divInner: DivInner = (array, limit) => {
  let biTotal = 0n;
  let fpe = 0;

  for (let i = 0; i < array.length; i++) {
    let [bigCurrent, dpLen] = array[i];
    let remained = 0n;

    if (i === 0) {
      biTotal = bigCurrent;
      fpe = dpLen;
      continue;
    }

    if (biTotal === 0n && fpe === 0) return [0n, 0];

    if (fpe === dpLen) {
      fpe = 0;
      dpLen = 0;
    }

    if (dpLen > 0 && fpe < dpLen) {
      biTotal *= 10n ** BigInt(dpLen - fpe);
      fpe = 0;
    }

    if (dpLen > 0 && fpe > dpLen) fpe = fpe - dpLen;

    while ((biTotal < 0 ? biTotal * -1n : biTotal) < bigCurrent) {
      if (limit <= fpe) return [biTotal / bigCurrent, fpe];

      fpe += 1;
      biTotal *= 10n;
    }

    const q = biTotal / bigCurrent;
    remained = biTotal - q * bigCurrent;
    biTotal = q;

    while (remained > 0 && fpe < limit) {
      const nextBigInt = remained * 10n;
      const nextQ = nextBigInt / bigCurrent;
      const nextRemained = nextBigInt - nextQ * bigCurrent;

      biTotal = biTotal * 10n + nextQ;
      remained = nextRemained;
      fpe += 1;
    }
  }

  return [biTotal, fpe];
};

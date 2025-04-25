export const add = (input: string[]) => {
  let sum = 0n;
  let fpe = 0;

  for (let i = 0; i < input.length; i++) {
    const target = input[i];
    const fpi = target.indexOf(".");
    const dpLen = fpi === -1 ? 0 : target.length - 1 - fpi;

    if (fpi === -1 && fpe === 0) {
      sum += BigInt(target);
      continue;
    }

    const str = fpi >= 0
      ? target.slice(0, fpi) + target.slice(fpi + 1)
      : target;

    if (fpe < dpLen) {
      const fpDiff = dpLen - fpe;
      sum = sum * BigInt(10 ** fpDiff) + BigInt(str);
    }

    if (fpe > dpLen) {
      sum += BigInt(str) * BigInt(10 ** (fpe - dpLen));
    }

    if (fpe === dpLen) sum += BigInt(str);
    if (fpe < dpLen) fpe = dpLen;
  }

  const isNeg = sum < 0;
  isNeg && (sum *= -1n);

  const dp = sum % BigInt(10 ** fpe);
  const str = sum.toString();

  const start = str.length - fpe;
  const before = str.slice(0, start);
  const after = str.slice(start);

  if (before) {
    return (isNeg ? "-" : "") +
      (fpe > 0 && dp > 0 ? trimTail(`${before}.${after}`) : before);
  } else {
    return `${fillHead(str.length, fpe, isNeg)}${after}`;
  }
};

export const fillHead = (len: number, fpe: number, isNeg: boolean) => {
  let head = isNeg ? "-0." : "0.";

  while (len < fpe) {
    head = head + "0";
    len += 1;
  }

  return head;
};

export const trimTail = (str: string): string => {
  if (str[str.length - 1] !== "0") return str;

  let count = 0;

  for (let i = str.length - 1; i > 0; i -= 1) {
    if (str[i] !== "0") return str.slice(0, str.length - count);

    count += 1;
  }

  return str;
};

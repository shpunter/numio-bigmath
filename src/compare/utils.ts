import type {
  CompareInner,
  IsEqualInner,
  IsLeftGreaterInner,
  IsLeftGreaterOrEqualInner,
  MaxInner,
  MinInner,
} from "./types.ts";

export const maxInner: MaxInner = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (compareInner(array[i], max)[1] === 1) max = array[i];
  }

  return max;
};

export const minInner: MinInner = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (compareInner(array[i], min)[1] === -1) min = array[i];
  }

  return min;
};

export const compareInner: CompareInner = (l, r) => {
  const [biL, fpeL] = l;
  const [biR, fpeR] = r;

  if (biL > 0n && biR < 0n) return [l, 1];
  if (biL < 0n && biR > 0n) return [r, -1];

  if (biL === 0n || biR === 0n) {
    if (biL > biR) return [l, 1];
    if (biL < biR) return [r, -1];
  }

  if (biL < 0n && biR < 0n) {
    if (biL === biR) {
      if (fpeL > fpeR) return [l, 1];
      if (fpeL < fpeR) return [r, -1];
      if (fpeL === fpeR) return [l, 0];
    }

    const fpeBiL = BigInt(fpeL);
    const fpeBiR = BigInt(fpeR);
    const max = fpeBiL > fpeBiR ? fpeBiL : fpeBiR;
    const powL = biL * 10n ** (max - fpeBiL);
    const powR = biR * 10n ** (max - fpeBiR);

    if (powL > powR) return [l, 1];
    if (powL < powR) return [r, -1];
  }

  if (biL > 0n && biR > 0n) {
    if (biL === biR) {
      if (fpeL > fpeR) return [r, -1];
      if (fpeL < fpeR) return [l, 1];
      if (fpeL === fpeR) return [l, 0];
    }

    const fpeBiL = BigInt(fpeL);
    const fpeBiR = BigInt(fpeR);
    const max = fpeBiL > fpeBiR ? fpeBiL : fpeBiR;
    const powL = biL * 10n ** (max - fpeBiL);
    const powR = biR * 10n ** (max - fpeBiR);

    if (powL > powR) return [l, 1];
    if (powL < powR) return [r, -1];
  }

  return [l, 0];
};

export const isEqualInner: IsEqualInner = ({ left, right }) => {
  return compareInner(left, right)[1] === 0;
};

export const isLeftGreaterInner: IsLeftGreaterInner = ({ left, right }) => {
  return compareInner(left, right)[1] > 0;
};

export const isLeftGreaterOrEqualInner: IsLeftGreaterOrEqualInner = ({ left, right }) => {
  return compareInner(left, right)[1] >= 0;
};

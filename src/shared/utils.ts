import type { InputData } from "../types.ts";
import type { A2S, S2A } from "./types.ts";

const convert = (
  isNegative: InputData["isNegative"],
  array: InputData["array"],
) => {
  return (isNegative ? "-" : "") + String.fromCharCode(...array);
};

export const a2s: A2S = ({ array, isFloat, isNegative, intLength }) => {
  const result: number[] = [];
  let lastValuableIdx = array.length;

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
  const isNegNil = string.length === 2 && string.charCodeAt(0) === 45 &&
    string.charCodeAt(1) === 48;

  if (isNil || isNegNil) {
    return {
      array: [48],
      intLength: 1,
      isNegative: false,
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

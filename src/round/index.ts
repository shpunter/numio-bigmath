import type { Round } from "./types.ts";
import { HALF_UP } from "./constants.ts";
import { calcLast, handleCarryOver, handleTail } from "./utils.ts";

/** This function round number. */
export const round: Round = (value, options) => {
  const roundMode = options?.roundMode ?? HALF_UP;
  let array: number[] = [];
  let sigFig = options?.sigFig ?? false;
  let decimals = options?.decimals ?? 0;
  let isFloat = false;
  let isNil = true;

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i);

    if (sigFig && charCode > 48) sigFig = false;
    if (isNil && charCode > 48) isNil = false;
    if (isFloat && !sigFig) decimals -= 1;
    if (charCode === 46) isFloat = true;

    if (isFloat && decimals === 0) {
      const next = value.charCodeAt(i + 1) ?? 0;
      const prev = value.charCodeAt(i - 1);
      const curr = charCode === 46 ? prev : charCode;
      const [last, hasCarryOver] = calcLast(curr, next, roundMode);

      if (charCode === 46) isFloat = false;

      if (hasCarryOver) {
        [array, isFloat] = handleCarryOver(array, isFloat);
        break;
      }

      charCode === 46
        ? array[array.length - 1] += last - prev
        : array.push(last);

      break;
    }

    array.push(charCode);
  }

  handleTail(array, isFloat);

  return (isNil && array[array.length - 1] <= 48)
    ? "0"
    : String.fromCharCode(...array);
};

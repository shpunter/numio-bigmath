import { isLeftGreaterInner } from "../compare/utils.ts";
import { divInner } from "../operations/div/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import { calcInner } from "../shared/utils.ts";
import type { CbrtInner } from "./types.ts";

export const cbrtInner: CbrtInner = (value, prec = [1n, 13], max = 100) => {
  if (value[0] < 0n) {
    throw new Error(
      "Invalid input: Cannot take the cube root of a negative value.",
    );
  }

  let guess = value;

  for (let i = 0; i < max; i++) {
    const mul = calcInner([guess, guess], (a, b) => a * b);
    const nextGuess = new PipeInner().add([
      calcInner([guess, [2n, 0]], (a, b) => a * b),
      divInner([value, mul], 20),
    ]).div([[3n, 0]]).result ?? [0n, 0];

    const bi = new PipeInner().sub([nextGuess, guess]).abs().result ?? [0n, 0];

    if (isLeftGreaterInner({ left: prec, right: bi })) {
      return [nextGuess, prec[1]];
    }

    guess = nextGuess;
  }

  return [guess, prec[1]];
};

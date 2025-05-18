import { isLeftGreaterInner } from "../compare/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import type { SqrtInner } from "./types.ts";

export const sqrtInner: SqrtInner = (value, prec = [1n, 13], max = 100) => {
  if (value[0] < 0n) {
    throw new Error(
      "Invalid input: Cannot take the square root of a negative value.",
    );
  }

  let guess = value;

  for (let i = 0; i < max; i++) {
    const nextGuess = new PipeInner()
      .div([value, guess])
      .add([guess])
      .mul([[5n, 1]]).result ?? [0n, 0];

    const bi = new PipeInner().sub([nextGuess, guess]).abs().calc();

    if (isLeftGreaterInner({ left: prec, right: bi })) {
      return [nextGuess, prec[1]];
    }

    guess = nextGuess;
  }

  return [guess, prec[1]];
};

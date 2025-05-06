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

    let [bi, fpe] = new PipeInner().sub([nextGuess, guess]).calc();

    if (bi < 0n) bi *= -1n;

    if (isLeftGreaterInner({ left: prec, right: [bi, fpe] })) {
      return [nextGuess, prec[1]];
    }

    guess = nextGuess;
  }

  return [guess, prec[1]];
};

import { isLeftGreaterInner } from "../compare/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import type { BI } from "../shared/types.ts";
import type { SqrtInner } from "./types.ts";

const halfInner: BI = [5n, 1];
const precDef: BI = [1n, 13];

export const sqrtInner: SqrtInner = (input, prec = precDef, max = 100) => {
  let guess = input;

  for (let i = 0; i < max; i++) {
    const nextGuess = new PipeInner()
      .div([input, guess])
      .add([guess])
      .mul([halfInner])
      .calc();

    let [bi, fpe] = new PipeInner().sub([nextGuess, guess]).calc();

    if (bi < 0n) bi *= -1n;

    if (isLeftGreaterInner({ left: prec, right: [bi, fpe] })) {
      return [nextGuess, prec[1]];
    }

    guess = nextGuess;
  }

  return [guess, prec[1]];
};

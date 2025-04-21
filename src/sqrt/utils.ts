import { isLeftGreaterInner } from "../compare/utils.ts";
import { PipeInner } from "../pipe/utils.ts";
import { cloneInner } from "../shared/utils.ts";
import type { SqrtInner } from "./types.ts";

const halfInner = {
  array: [53],
  intLength: 0,
  isNegative: false,
  isFloat: true,
};

const precDef = {
  array: [49],
  intLength: -12,
  isNegative: false,
  isFloat: true,
};

export const sqrtInner: SqrtInner = (input, prec = precDef, max = 100) => {
  let guess = cloneInner(input);

  for (let i = 0; i < max; i++) {
    const nextGuess = new PipeInner()
      .divInner([cloneInner(input), cloneInner(guess)])
      .addInner([guess])
      .mulInner([halfInner]).result;

    const candidate = new PipeInner()
      .subInner([cloneInner(nextGuess), cloneInner(guess)]).result;

    candidate.isNegative = false;

    if (isLeftGreaterInner({ left: prec, right: candidate })) {
      return [nextGuess, prec.intLength * -1];
    }

    guess = nextGuess;
  }

  return [guess, prec.intLength * -1];
};

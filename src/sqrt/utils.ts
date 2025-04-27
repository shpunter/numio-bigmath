import { isLeftGreaterInner } from "../compare/utils.ts";
import type { BI } from "../shared/types.ts";
import { calcInner, divInner } from "../shared/utils.ts";
import type { SqrtInner } from "./types.ts";

// const halfInner = {
//   array: [53],
//   intLength: 0,
//   isNegative: false,
//   isFloat: true,
// };

const halfInner: BI = [5n, 1];

// const precDef = {
//   array: [49],
//   intLength: -12,
//   isNegative: false,
//   isFloat: true,
// };

const precDef: BI = [1n, 13];

export const sqrtInner: SqrtInner = (input, prec = precDef, max = 100) => {
  // let guess = cloneInner(input);
  let guess = input;


  for (let i = 0; i < max; i++) {
    const div = divInner([input, guess], 20);
    const sum = calcInner([div, guess], (a, b) => a + b);
    const nextGuess = calcInner([sum, halfInner], (a, b) => a * b);
    // const nextGuess = new PipeInner()
    //   .divInner([cloneInner(input), cloneInner(guess)])
    //   .addInner([guess])
    //   .mulInner([halfInner]).result;

    let [bi, fpe] = calcInner([nextGuess, guess], (a, b) => a - b);
    // const candidate = new PipeInner()
    //   .subInner([cloneInner(nextGuess), cloneInner(guess)]).result;

    if (bi < 0n) bi *= -1n; 
    // candidate.isNegative = false;

    if (isLeftGreaterInner({ left: prec, right: [bi, fpe] })) {
      return [nextGuess, prec[1]];
    }

    guess = nextGuess;
  }

  return [guess, prec[1]];
};

import { bi2s, calcInner, s2bi } from "../shared/utils.ts";

import type { BI, BI2S } from "../shared/types.ts";
import { divInner } from "../operations/div/utils.ts";

export class Pipe {
  #result: BI | undefined;

  constructor() {}

  add(array: string[]): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = calcInner(arrayInner, (a, b) => a + b, this.#result);

    return this;
  }

  sub(array: string[]): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = calcInner(arrayInner, (a, b) => a - b, this.#result);

    return this;
  }

  div(array: string[], limit = 20): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = divInner(arrayInner, limit, this.#result);

    return this;
  }

  mul(array: string[]): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = calcInner(arrayInner, (a, b) => a * b, this.#result);

    return this;
  }

  calc(): ReturnType<BI2S> {
    const [bi, fpe] = this.#result ?? [0n, 0];
    const result = bi2s(bi, fpe);
    this.#result = undefined;

    return result;
  }
}

/** Using this function you can chain operations (add, sub, div, mul). */
export const pipe: Pipe = new Pipe();

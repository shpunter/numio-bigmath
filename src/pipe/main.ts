import { DEFAULT } from "../shared/constant.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { subRoute } from "../operations/sub/utils.ts";
import { addRoute } from "../operations/add/utils.ts";
import { divRoute } from "../operations/div/utils.ts";
import { mulRoute } from "../operations/mul/utils.ts";

import type { A2S } from "../shared/types.ts";
import type { InputData } from "../types.ts";

export class Pipe {
  #result: InputData;

  constructor() {
    this.#result = DEFAULT;
  }

  add(strs: string[]): Pipe {
    this.#result = addRoute(strs.map((str) => s2a(str)), this.#result);

    return this;
  }

  sub(strs: string[]): Pipe {
    this.#result = subRoute(strs.map((str) => s2a(str)), this.#result);

    return this;
  }

  div(strs: string[], limit = 20): Pipe {
    this.#result = divRoute(strs.map((str) => s2a(str)), this.#result, limit);

    return this;
  }

  mul(strs: string[]): Pipe {
    this.#result = mulRoute(strs.map((str) => s2a(str)), this.#result);

    return this;
  }

  calc(): ReturnType<A2S> {
    const result = a2s(this.#result);
    this.#result = DEFAULT;

    return result;
  }
}

/** Using this function you can chain operations (add, sub, div, mul). */
export const pipe: Pipe = new Pipe();

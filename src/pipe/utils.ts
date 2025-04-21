import { DEFAULT } from "../shared/constant.ts";
import { a2s, cloneInner } from "../shared/utils.ts";
import { subRoute } from "../operations/sub/utils.ts";
import { addRoute } from "../operations/add/utils.ts";
import { divRoute } from "../operations/div/utils.ts";
import { mulRoute } from "../operations/mul/utils.ts";

import type { A2S } from "../shared/types.ts";
import type { InputData } from "../types.ts";

export class PipeInner {
  result: InputData;

  constructor() {
    this.result = DEFAULT;
  }

  addInner(array: InputData[]): PipeInner {
    this.result = addRoute(array, cloneInner(this.result));

    return this;
  }

  subInner(array: InputData[]): PipeInner {
    this.result = subRoute(array, cloneInner(this.result));

    return this;
  }

  divInner(array: InputData[]): PipeInner {
    this.result = divRoute(array, cloneInner(this.result), 20);

    return this;
  }

  mulInner(array: InputData[]): PipeInner {
    this.result = mulRoute(array, cloneInner(this.result));

    return this;
  }

  calc(): ReturnType<A2S> {
    const result = a2s(this.result);
    this.result = DEFAULT;

    return result;
  }
}

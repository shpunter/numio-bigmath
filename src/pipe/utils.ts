import { calcInner } from "../shared/utils.ts";

import type { BI } from "../shared/types.ts";
import { divInner } from "../operations/div/utils.ts";
import { absInner } from "../abs/utils.ts";

export class PipeInner {
  result: BI | undefined;

  constructor() {}

  add(array: BI[]): PipeInner {
    this.result = calcInner(array, (a, b) => a + b, this.result);

    return this;
  }

  sub(array: BI[]): PipeInner {
    this.result = calcInner(array, (a, b) => a - b, this.result);

    return this;
  }

  div(array: BI[], precision = 20): PipeInner {
    this.result = divInner(array, precision, this.result);

    return this;
  }

  mul(array: BI[]): PipeInner {
    this.result = calcInner(array, (a, b) => a * b, this.result);

    return this;
  }

  abs(): PipeInner {
    this.result && (this.result = absInner(this.result));

    return this;
  }

  get bi() {
    return this.result ?? [0n, 0];
  }
}

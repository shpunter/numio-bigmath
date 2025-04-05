import { addRoute } from "../add/utils.ts";
import { divRoute } from "../div/utils.ts";
import { mulRoute } from "../mul/utils.ts";
import { DEFAULT } from "../shared/constant.ts";
import { a2s, s2a } from "../shared/utils.ts";
import { subRoute } from "../sub/utils.ts";
import type { InputData } from "../types.ts";

class Pipe {
  result: InputData = DEFAULT;

  constructor() {}

  add(strs: string[]) {
    this.result = addRoute(strs.map((str) => s2a(str)), this.result);

    return this;
  }

  sub(strs: string[]) {
    this.result = subRoute(strs.map((str) => s2a(str)), this.result);

    return this;
  }

  div(strs: string[], limit = 20) {
    this.result = divRoute(strs.map((str) => s2a(str)), this.result, limit);

    return this;
  }

  mul(strs: string[]) {
    this.result = mulRoute(strs.map((str) => s2a(str)), this.result);

    return this;
  }

  calc() {
    const result = a2s(this.result);
    this.result = DEFAULT;

    return result;
  }
}

export const pipe = new Pipe();

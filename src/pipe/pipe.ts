import { bi2s, calcInner, s2bi } from "../shared/utils.ts";
import type { BI, BI2S } from "../shared/types.ts";
import { divInner } from "../operations/div/utils.ts";
import { absInner } from "../abs/utils.ts";
import { modInner } from "../mod/utils.ts";

/** Using this function you can chain operations (add, sub, div, mul). */
export class Pipe {
  #result: BI | undefined;

  constructor(value?: string) {
    value && (this.#result = s2bi(value));
  }

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

  div(array: string[], precision = 20): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = divInner(arrayInner, precision, this.#result);

    return this;
  }

  mul(array: string[]): Pipe {
    const arrayInner = array.map((str) => s2bi(str));

    this.#result = calcInner(arrayInner, (a, b) => a * b, this.#result);

    return this;
  }

  abs(): Pipe {
    if (!this.#result) {
      throw new Error("Cannot calculate the absolute value of an undefined.");
    }

    this.#result = absInner(this.#result);

    return this;
  }

  mod(value: string): Pipe {
    const right = s2bi(value);
    if (!this.#result) throw new Error("Value is undefined.");
    if (this.#result[1] > 0) throw new Error(`${bi2s(this.#result)} is not valid. It should be integer to take a modulo.`);
    if (right[1] > 0) throw new Error(`${value} is not valid. It should be integer to take a modulo.`);
    
    this.#result = modInner(this.#result, s2bi(value));

    return this;
  }

  calc(): ReturnType<BI2S> {
    if (!this.#result) {
      throw new Error("Cannot calculate based on an undefined input.");
    }

    return bi2s(this.#result);
  }

  resultToBase(radix: number): string {
    if (!this.#result) {
      throw new Error(`Cannot convert an undefined result to base ${radix}.`);
    }

    if (this.#result[1] > 0) {
      throw new Error(`Cannot convert non integer result to base ${radix}.`);
    }

    return this.#result?.[0].toString(radix);
  }
}

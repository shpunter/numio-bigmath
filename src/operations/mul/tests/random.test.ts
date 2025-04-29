import { assertEquals } from "jsr:@std/assert";
import { mul } from "../mul.ts";

const randInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const array = Array(randInRange(2, 5)).fill(0).map(() => {
  const isNegative = randInRange(0, 1) > 0 ? "-" : "";
  const intPart = randInRange(0, 20).toString();
  const integer = `${isNegative}${intPart}`;
  const decPart = randInRange(0, 50).toString();

  return `${integer}${decPart}`;
});

Deno.test("random mul", () => {
  for (let i = 0; i < 1_000_000; i++) {
    Deno.test(array.join("|"), () => {
      const result = mul(array);
      let expected = 1;
      for (let i = 0; i < array.length; i++) {
        expected *= Math.floor(+array[i] * 10);
      }

      assertEquals(result, (expected / 10 ** array.length).toString());
    });
  }
});

import { assertEquals } from "jsr:@std/assert";
import { sub } from "../index.ts";

const randInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const array = Array(randInRange(2, 10_000)).fill(0).map(() => {
  const isNegative = randInRange(0, 1) > 0 ? "-" : "";
  const intPart = randInRange(0, 10_000).toString();
  const integer = `${isNegative}${intPart}`;
  const decPart = randInRange(0, 1_000).toString();
  const decimal = randInRange(0, 1) > 0 ? `.${decPart}` : "";

  return `${integer}${decimal}`;
});

Deno.test("random sub", () => {
  for (let i = 0; i < 30_000; i++) {
    Deno.test(array.join("|"), () => {
      const result = sub(array);
      let expected = 0;

      for (let i = 0; i < array.length; i++) {
        expected += Math.round(+array[i] * 10_000);
      }

      assertEquals(result, (expected / 10_000).toString());
    });
  }
});

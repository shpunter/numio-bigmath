import { assertEquals } from "jsr:@std/assert";
import { div } from "../main.ts";

const randInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const array = Array(randInRange(3, 4)).fill(0).map(() => {
  const isNegative = randInRange(0, 1) > 0 ? "-" : "";
  const intPart = randInRange(1, 99).toString();
  const integer = `${isNegative}${intPart}`;
  const decPart = randInRange(1, 99).toString();
  const decimal = randInRange(0, 1) > 0 ? `.${decPart}` : "";

  return `${integer}${decimal}`;
});

Deno.test("random div", () => {
  for (let i = 0; i < 1_000_000; i++) {
    Deno.test(array.join("|"), () => {
      const result = div(array, 8);
      let expected = 0;

      for (let i = 0; i < array.length; i++) {
        if (i === 0) expected = +array[i];
        else expected = (expected / +array[i] * 100_000_000 >> 0) / 100_000_000;
      }

      assertEquals(result, expected.toString());
    });
  }
});

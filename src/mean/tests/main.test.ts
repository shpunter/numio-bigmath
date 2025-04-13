import { assertEquals } from "jsr:@std/assert";
import { mean } from "../main.ts";

Deno.test("mean of [1, 1, 1, 1, 1, 1, 100]", () => {
  const res = mean(["1", "1", "1", "1", "1", "1", "100"]);
  assertEquals(res, "15.14285714285714285714");
});

Deno.test("mean of [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 100]", () => {
  const res = mean(["0.1", "0.1", "0.1", "0.1", "0.1", "0.1", "100"]);
  assertEquals(res, "14.37142857142857142857");
});

Deno.test("mean of [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]", () => {
  const res = mean(["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]);
  assertEquals(res, "5");
});

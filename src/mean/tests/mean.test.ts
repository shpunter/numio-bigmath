import { assertEquals } from "jsr:@std/assert";
import { mean } from "../../../index.ts";

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

Deno.test("mean of [1, 2]", () => {
  const res = mean(["1", "2"]);
  assertEquals(res, "1.5");
});

Deno.test("mean of [1, 2, 3]", () => {
  const res = mean(["1", "2", "3"]);
  assertEquals(res, "2");
});

Deno.test("mean of [0.1, 0.2, 0.3]", () => {
  const res = mean(["0.1", "0.2", "0.3"]);
  assertEquals(res, "0.2");
});

Deno.test("mean of [-0.1, 0.2, 0.3]", () => {
  const res = mean(["-0.1", "0.2", "0.3"]);
  assertEquals(res, "0.13333333333333333333");
});

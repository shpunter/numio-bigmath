import { assertEquals } from "jsr:@std/assert/equals";
import { MADQ2 } from "../main.ts";

Deno.test("MADQ2 [11, 12, 12, 14, 15, 16]", () => {
  const res = MADQ2(["11", "12", "12", "14", "15", "16"]);
  assertEquals(res, "1.5");
});

Deno.test("MADQ2 [1, 1, 1, 1, 1, 1, 100]", () => {
  const res = MADQ2(["1", "1", "1", "1", "1", "1", "100"]);
  assertEquals(res, "14.14285714285714285714");
});

Deno.test("MADQ2 [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 100]", () => {
  const res = MADQ2(["0.1", "0.1", "0.1", "0.1", "0.1", "0.1", "100"]);
  assertEquals(res, "14.27142857142857142857");
});

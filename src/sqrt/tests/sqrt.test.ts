import { assertEquals } from "jsr:@std/assert/equals";
import { sqrt } from "../main.ts";

Deno.test("81", () => {
  assertEquals(sqrt("81"), "9");
});

Deno.test("65025", () => {
  assertEquals(sqrt("65025"), "255");
});

Deno.test("0.0_081", () => {
  assertEquals(sqrt("0.0081"), "0.09");
});

Deno.test("0.000_081", () => {
  assertEquals(sqrt("0.000081"), "0.009");
});

Deno.test("0.00_000_081", () => {
  assertEquals(sqrt("0.00000081"), "0.0009");
});

Deno.test("0.0_000_000_081", () => {
  assertEquals(sqrt("0.0000000081"), "0.00009");
});

Deno.test("0.000_000_000_081", () => {
  assertEquals(sqrt("0.000000000081"), "0.000009");
});

Deno.test("0.0_000_000__000__000__000__000__000__000__000__000__000_000_000_000_000_081", () => {
  assertEquals(sqrt("0.0000000000000000000081"), "0.00000000009");
});

Deno.test("3, default", () => {
  assertEquals(sqrt("3"), "1.7320508075689");
});

Deno.test("3, 0.000000000000000000001", () => {
  assertEquals(sqrt("3", "0.000000000000000000001"), "1.732050807568877293527");
});

Deno.test("3, 0.001", () => {
  assertEquals(sqrt("3", "0.001"), "1.732");
});

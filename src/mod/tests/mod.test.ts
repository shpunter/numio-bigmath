import { assertEquals } from "@std/assert/equals";
import { mod } from "../../../index.ts";

Deno.test("5 mod 2", () => {
  const res = mod("5", "2");

  assertEquals(res, "5");
});

Deno.test("4 mod 3", () => {
  const res = mod("4", "3");

  assertEquals(res, "33333333333333333333");
});

Deno.test("4 mod 3", () => {
  const res = mod("4", "3", { precision: 3 });

  assertEquals(res, "333");
});

Deno.test("4 mod 3", () => {
  const res = mod("4", "3", { precision: 0 });

  assertEquals(res, "0");
});

Deno.test("3 mod 4", () => {
  const res = mod("3", "4");

  assertEquals(res, "75");
});

Deno.test("0.25 mod 2", () => {
  const res = mod("0.25", "2");

  assertEquals(res, "125");
});

Deno.test("0.25 mod 0.2", () => {
  const res = mod("0.25", "0.2");

  assertEquals(res, "25");
});

Deno.test("0xA mod 8", () => {
  const res = mod("0xA", "8");

  assertEquals(res, "25");
});

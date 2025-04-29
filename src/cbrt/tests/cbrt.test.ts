import { assertEquals } from "@std/assert/equals";
import { cbrt } from "../cbrt.ts";

Deno.test("cbrt 27", () => {
  assertEquals(cbrt("27"), "3");
});

Deno.test("cbrt 1000", () => {
  assertEquals(cbrt("1000"), "10");
});

Deno.test("cbrt 3375", () => {
  assertEquals(cbrt("3375"), "15");
});

Deno.test("cbrt 15", () => {
  assertEquals(cbrt("15"), "2.4662120743305");
});

Deno.test("cbrt 15", () => {
  assertEquals(cbrt("15", "0.001"), "2.466");
});

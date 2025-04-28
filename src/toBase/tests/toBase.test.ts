import { assertEquals } from "@std/assert/equals";
import { toBase } from "../main.ts";

Deno.test("11 toBase 16", () => {
  assertEquals(toBase({ value: "11", toBase: 16 }), "b");
});

Deno.test("-11 toBase 16", () => {
  assertEquals(toBase({ value: "-11", toBase: 16 }), "-b");
});

Deno.test("0xb toBase 10", () => {
  assertEquals(toBase({ value: "0xb", toBase: 10 }), "11");
});

Deno.test("0b101 toBase 10", () => {
  assertEquals(toBase({ value: "0b101", toBase: 10 }), "5");
});

Deno.test("0b1101 toBase 16", () => {
  assertEquals(toBase({ value: "0b1101", toBase: 16 }), "d");
});

Deno.test("0o11 toBase 10", () => {
  assertEquals(toBase({ value: "0o11", toBase: 10 }), "9");
});

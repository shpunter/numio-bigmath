import { assertEquals } from "@std/assert/equals";
import { toBase } from "../../../index.ts";

Deno.test("11 toBase 16", () => {
  assertEquals(toBase({ value: "11", toBase: 16 }), "0xB");
});

Deno.test("-11 toBase 16", () => {
  assertEquals(toBase({ value: "-11", toBase: 16 }), "-0xB");
});

Deno.test("0xb toBase 10", () => {
  assertEquals(toBase({ value: "0xb", toBase: 10 }), "11");
});

Deno.test("0b101 toBase 10", () => {
  assertEquals(toBase({ value: "0b101", toBase: 10 }), "5");
});

Deno.test("0b1101 toBase 16", () => {
  assertEquals(toBase({ value: "0b1101", toBase: 16 }), "0xD");
});

Deno.test("0o11 toBase 10", () => {
  assertEquals(toBase({ value: "0o11", toBase: 10 }), "9");
});

Deno.test("3 toBase 2", () => {
  assertEquals(toBase({ value: "3", toBase: 2 }), "0b11");
});

Deno.test("0b11 toBase 10", () => {
  assertEquals(toBase({ value: "0b11", toBase: 10 }), "3");
});

Deno.test("-3 toBase 2", () => {
  assertEquals(toBase({ value: "-3", toBase: 2 }), "-0b11");
});

Deno.test("-0b11 toBase 10", () => {
  assertEquals(toBase({ value: "-0b11", toBase: 10 }), "-3");
});

Deno.test("10 toBase 16", () => {
  assertEquals(toBase({ value: "10", toBase: 16 }), "0xA");
});

Deno.test("0xA toBase 10", () => {
  assertEquals(toBase({ value: "0xA", toBase: 10 }), "10");
});

Deno.test("-10 toBase 16", () => {
  assertEquals(toBase({ value: "-10", toBase: 16 }), "-0xA");
});

Deno.test("-0xA toBase 10", () => {
  assertEquals(toBase({ value: "-0xA", toBase: 10 }), "-10");
});

Deno.test("10 toBase 2", () => {
  assertEquals(toBase({ value: "10", toBase: 2 }), "0b1010");
});

Deno.test("0b1010 toBase 16", () => {
  assertEquals(toBase({ value: "0b1010", toBase: 16 }), "0xA");
});

Deno.test("-0b1010 toBase 16", () => {
  assertEquals(toBase({ value: "-0b1010", toBase: 16 }), "-0xA");
});

Deno.test("0xA toBase 2", () => {
  assertEquals(toBase({ value: "0xA", toBase: 2 }), "0b1010");
});

Deno.test("-0xA toBase 2", () => {
  assertEquals(toBase({ value: "-0xA", toBase: 2 }), "-0b1010");
});
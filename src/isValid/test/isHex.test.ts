import { assertEquals } from "@std/assert/equals";
import { isHex } from "../../../index.ts";

Deno.test("0x0", () => {
  assertEquals(isHex("0x0"), true);
});

Deno.test("0x1", () => {
  assertEquals(isHex("0x1"), true);
});

Deno.test("0x9", () => {
  assertEquals(isHex("0x9"), true);
});

Deno.test("0xA", () => {
  assertEquals(isHex("0xA"), true);
});

Deno.test("0xF", () => {
  assertEquals(isHex("0xF"), true);
});

Deno.test("0x10", () => {
  assertEquals(isHex("0x10"), true);
});

Deno.test("0xAF", () => {
  assertEquals(isHex("0xAF"), true);
});

Deno.test("0xFF", () => {
  assertEquals(isHex("0xFF"), true);
});

Deno.test("0x1234567890abcdef", () => {
  assertEquals(isHex("0x1234567890abcdef"), true);
});

Deno.test("0X0", () => {
  assertEquals(isHex("0X0"), true);
});

Deno.test("0XF", () => {
  assertEquals(isHex("0XF"), true);
});

Deno.test("0X1A2B", () => {
  assertEquals(isHex("0X1A2B"), true);
});

Deno.test("-0x0", () => {
  assertEquals(isHex("-0x0"), true);
});

Deno.test("-0x1", () => {
  assertEquals(isHex("-0x1"), true);
});

Deno.test("-0xA", () => {
  assertEquals(isHex("-0xA"), true);
});

Deno.test("-0xF", () => {
  assertEquals(isHex("-0xF"), true);
});

Deno.test("-0x10", () => {
  assertEquals(isHex("-0x10"), true);
});

Deno.test("-0xAF", () => {
  assertEquals(isHex("-0xAF"), true);
});

Deno.test("-0xFF", () => {
  assertEquals(isHex("-0xFF"), true);
});

Deno.test("-0xabcdef", () => {
  assertEquals(isHex("-0xabcdef"), true);
});

Deno.test("-0X0", () => {
  assertEquals(isHex("-0X0"), true);
});

Deno.test("-0XF", () => {
  assertEquals(isHex("-0XF"), true);
});

Deno.test("-0X1A2B", () => {
  assertEquals(isHex("-0X1A2B"), true);
});

Deno.test("0x", () => {
  assertEquals(isHex("0x"), false);
});

Deno.test("-0x", () => {
  assertEquals(isHex("-0x"), false);
});

Deno.test("0x ", () => {
  assertEquals(isHex("0x "), false);
});

Deno.test(" 0x1", () => {
  assertEquals(isHex(" 0x1"), false);
});

Deno.test("0x1 ", () => {
  assertEquals(isHex("0x1 "), false);
});

Deno.test("0x-1", () => {
  assertEquals(isHex("0x-1"), false);
});

Deno.test("- 0x1", () => {
  assertEquals(isHex("- 0x1"), false);
});

Deno.test("0b10", () => {
  assertEquals(isHex("0b10"), false);
});

Deno.test("0o7", () => {
  assertEquals(isHex("0o7"), false);
});

Deno.test("1A", () => {
  assertEquals(isHex("1A"), false);
});

Deno.test("-AF", () => {
  assertEquals(isHex("-AF"), false);
});

Deno.test("0xG", () => {
  assertEquals(isHex("0xG"), false);
});

Deno.test("0x1g", () => {
  assertEquals(isHex("0x1g"), false);
});

Deno.test("-0xH", () => {
  assertEquals(isHex("-0xH"), false);
});

Deno.test("0x a", () => {
  assertEquals(isHex("0x a"), false);
});

Deno.test("0xa ", () => {
  assertEquals(isHex("0xa "), false);
});

Deno.test("0x.", () => {
  assertEquals(isHex("0x."), false);
});

Deno.test("0x-", () => {
  assertEquals(isHex("0x-"), false);
});

Deno.test("0x1-A", () => {
  assertEquals(isHex("0x1-A"), false);
});

Deno.test("empty str", () => {
  assertEquals(isHex(""), false);
});

Deno.test("-", () => {
  assertEquals(isHex("-"), false);
});

Deno.test("A", () => {
  assertEquals(isHex("A"), false);
});

Deno.test("-A", () => {
  assertEquals(isHex("-A"), false);
});

Deno.test("0", () => {
  assertEquals(isHex("0"), false);
});

Deno.test("-0", () => {
  assertEquals(isHex("-0"), false);
});

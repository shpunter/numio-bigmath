import { assertEquals } from "@std/assert/equals";
import { isDecimal } from "../../../index.ts";

Deno.test("Positive integers", () => {
  assertEquals(isDecimal("0"), true);
  assertEquals(isDecimal("1"), true);
  assertEquals(isDecimal("123"), true);
  assertEquals(isDecimal("99999"), true);
});

Deno.test("Negative integers", () => {
  assertEquals(isDecimal("-0"), true);
  assertEquals(isDecimal("-1"), true);
  assertEquals(isDecimal("-42"), true);
  assertEquals(isDecimal("-999"), true);
});

Deno.test("Positive decimals", () => {
  assertEquals(isDecimal("0.0"), true);
  assertEquals(isDecimal("0.1"), true);
  assertEquals(isDecimal("1.5"), true);
  assertEquals(isDecimal("123.456"), true);
  assertEquals(isDecimal("0.00001"), true);
});

Deno.test("Negative decimals", () => {
  assertEquals(isDecimal("-0.0"), true);
  assertEquals(isDecimal("-0.1"), true);
  assertEquals(isDecimal("-2.718"), true);
  assertEquals(isDecimal("-987.654"), true);
  assertEquals(isDecimal("-0.001"), true);
});

Deno.test("Integers with trailing decimal point", () => {
  assertEquals(isDecimal("10."), false);
  assertEquals(isDecimal("-5."), false);
  assertEquals(isDecimal("0."), false);
});

Deno.test("Decimals with leading zero", () => {
  assertEquals(isDecimal("0.5"), true);
  assertEquals(isDecimal("-0.9"), true);
});

Deno.test("Zero with decimal", () => {
  assertEquals(isDecimal("0.0"), true);
  assertEquals(isDecimal("-0.0"), true);
});

Deno.test("Invalid formats - leading dot", () => {
  assertEquals(isDecimal(".5"), false);
  assertEquals(isDecimal("-.7"), false);
});

Deno.test("Invalid formats - trailing dot with nothing after", () => {
  assertEquals(isDecimal("10."), false);
  assertEquals(isDecimal("-5."), false);
});

Deno.test("Invalid formats - multiple decimal points", () => {
  assertEquals(isDecimal("1.2.3"), false);
  assertEquals(isDecimal("-4.5.6"), false);
});

Deno.test("Invalid formats - non-numeric characters", () => {
  assertEquals(isDecimal("abc"), false);
  assertEquals(isDecimal("1a2"), false);
  assertEquals(isDecimal("3.14z"), false);
});

Deno.test("Invalid formats - empty string and sign only", () => {
  assertEquals(isDecimal(""), false);
  assertEquals(isDecimal("-"), false);
  assertEquals(isDecimal("."), false);
});

Deno.test("Invalid formats - other bases", () => {
  assertEquals(isDecimal("0b10"), false);
  assertEquals(isDecimal("0xAF"), false);
  assertEquals(isDecimal("0o7"), false);
});

Deno.test("Edge cases - large numbers", () => {
  assertEquals(isDecimal("12345678901234567890"), true);
  assertEquals(isDecimal("-98765432109876543210.123"), true);
});

Deno.test("Edge cases - very small decimals", () => {
  assertEquals(isDecimal("0.0000000001"), true);
  assertEquals(isDecimal("-0.0000000000001"), true);
});

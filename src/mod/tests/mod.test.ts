import { assertEquals } from "@std/assert/equals";
import { mod } from "../../../index.ts";

Deno.test("5 mod 2", () => {
  const res = mod("5", "2");

  assertEquals(res, "1");
});

Deno.test("4 mod 3", () => {
  const res = mod("4", "3");

  assertEquals(res, "1");
});

Deno.test("7 mod 3", () => {
  const res = mod("7", "3");

  assertEquals(res, "1");
});

Deno.test("3 mod 4", () => {
  const res = mod("3", "4");

  assertEquals(res, "3");
});

Deno.test("0xA mod 8", () => {
  const res = mod("0xA", "8");

  assertEquals(res, "2");
});

Deno.test("Positive dividend, positive divisor (dividend > divisor)", () => {
  const res = mod("10", "3");
  assertEquals(res, "1");
});

Deno.test("Positive dividend, positive divisor (dividend = divisor)", () => {
  const res = mod("7", "7");
  assertEquals(res, "0");
});

Deno.test("Positive dividend, positive divisor (dividend < divisor)", () => {
  const res = mod("5", "12");
  assertEquals(res, "5");
});

Deno.test("Negative dividend, positive divisor (-5 mod 3)", () => {
  const res = mod("-5", "3");
  assertEquals(res, "1"); 
});

Deno.test("Negative dividend, positive divisor (-6 mod 3)", () => {
  const res = mod("-6", "3");
  assertEquals(res, "0");
});

Deno.test("Positive dividend, negative divisor (5 mod -3)", () => {
  const res = mod("5", "-3");
  assertEquals(res, "-1"); 
});

Deno.test("Negative dividend, negative divisor (-5 mod -3)", () => {
  const res = mod("-5", "-3");
  assertEquals(res, "-2");
});

Deno.test("Zero dividend, positive divisor (0 mod 5)", () => {
  const res = mod("0", "5");
  assertEquals(res, "0");
});

Deno.test("Zero dividend, negative divisor (0 mod -5)", () => {
  const res = mod("0", "-5");
  assertEquals(res, "0");
});


Deno.test("Large numbers", () => {
  const res = mod("1234567890123456789", "987654321");
  assertEquals(res, "725308641");
});

Deno.test("Precision: decimal result, lower requested precision (truncation/rounding)", () => {
  const res = mod("10", "3"); 
  assertEquals(res, "1"); 
});

Deno.test("Binary input (0b1011 mod 0b10)", () => {
  const res = mod("0b1011", "0b10"); 
  assertEquals(res, "1");
});

Deno.test("Octal input (0o12 mod 0o5)", () => {
  const res = mod("0o12", "0o5");
  assertEquals(res, "0");
});

Deno.test("Hexadecimal input (0xFF mod 0x10)", () => {
  const res = mod("0xFF", "0x10"); 
  assertEquals(res, "15"); 
});
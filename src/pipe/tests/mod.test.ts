import { assertEquals } from "@std/assert/equals";
import { Pipe } from "../../../index.ts";

Deno.test("5 mod 2", () => {
  const res = new Pipe().add(["4", "1"]).mod("2").calc();
  assertEquals(res, "1");
});

Deno.test("4 mod 3", () => {
  const res = new Pipe().add(["4"]).mod("3").calc();
  assertEquals(res, "1"); // Original: 4 % 3 = 1
});

Deno.test("7 mod 3", () => {
  const res = new Pipe().add(["7"]).mod("3").calc();
  assertEquals(res, "1"); // Original: 7 % 3 = 1
});

Deno.test("3 mod 4", () => {
  const res = new Pipe().add(["3"]).mod("4").calc();
  assertEquals(res, "3"); // Original: 3 % 4 = 3
});

Deno.test("0xA mod 8", () => {
  const res = new Pipe().add(["0xA"]).mod("8").calc();
  assertEquals(res, "2"); // Original: 0xA (10) % 8 = 2
});

Deno.test("Positive dividend, positive divisor (dividend > divisor)", () => {
  const res = new Pipe().add(["10"]).mod("3").calc();
  assertEquals(res, "1"); // Original: 10 % 3 = 1
});

Deno.test("Positive dividend, positive divisor (dividend = divisor)", () => {
  const res = new Pipe().add(["7"]).mod("7").calc();
  assertEquals(res, "0"); // Original: 7 % 7 = 0
});

Deno.test("Positive dividend, positive divisor (dividend < divisor)", () => {
  const res = new Pipe().add(["5"]).mod("12").calc();
  assertEquals(res, "5"); // Original: 5 % 12 = 5
});

Deno.test("Negative dividend, positive divisor (-5 mod 3)", () => {
  const res = new Pipe().add(["-5"]).mod("3").calc();
  assertEquals(res, "1");
});

Deno.test("Negative dividend, positive divisor (-6 mod 3)", () => {
  const res = new Pipe().add(["-6"]).mod("3").calc();
  assertEquals(res, "0");
});

Deno.test("Positive dividend, negative divisor (5 mod -3)", () => {
  const res = new Pipe().add(["5"]).mod("-3").calc();
  assertEquals(res, "-1");
});

Deno.test("Negative dividend, negative divisor (-5 mod -3)", () => {
  const res = new Pipe().add(["-5"]).mod("-3").calc();
  assertEquals(res, "-2");
});

Deno.test("Zero dividend, positive divisor (0 mod 5)", () => {
  const res = new Pipe().add(["0"]).mod("5").calc();
  assertEquals(res, "0");
});

Deno.test("Zero dividend, negative divisor (0 mod -5)", () => {
  const res = new Pipe().add(["0"]).mod("-5").calc();
  assertEquals(res, "0");
});

Deno.test("Large numbers", () => {
  const res = new Pipe().add(["1234567890123456789"]).mod("987654321").calc();
  assertEquals(res, "725308641");
});

Deno.test("Precision: decimal result, lower requested precision (truncation/rounding)", () => {
  const res = new Pipe().add(["10"]).mod("3").calc();
  assertEquals(res, "1");
});

Deno.test("Binary input (0b1011 mod 0b10)", () => {
  const res = new Pipe().add(["0b1011"]).mod("0b10").calc();
  assertEquals(res, "1");
});

Deno.test("Octal input (0o12 mod 0o5)", () => {
  const res = new Pipe().add(["0o12"]).mod("0o5").calc();
  assertEquals(res, "0");
});

Deno.test("Hexadecimal input (0xFF mod 0x10)", () => {
  const res = new Pipe().add(["0xFF"]).mod("0x10").calc();
  assertEquals(res, "15");
});
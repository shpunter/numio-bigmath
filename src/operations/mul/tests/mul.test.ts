import { assertEquals } from "jsr:@std/assert";
import { mul } from "../../../../index.ts";

Deno.test("2 * 5", () => {
  const res = mul(["2", "5"]);
  assertEquals(res, "10");
});

Deno.test("1 * 5", () => {
  const res = mul(["1", "5"]);
  assertEquals(res, "5");
});

Deno.test("0 * 5", () => {
  const res = mul(["0", "5"]);
  assertEquals(res, "0");
});

Deno.test("23 * 5", () => {
  const res = mul(["23", "5"]);
  assertEquals(res, "115");
});

Deno.test("5 * 23", () => {
  const res = mul(["5", "23"]);
  assertEquals(res, "115");
});

Deno.test("99 * 5", () => {
  const res = mul(["99", "5"]);
  assertEquals(res, "495");
});

Deno.test("15 * 11", () => {
  const res = mul(["15", "11"]);
  assertEquals(res, "165");
});

Deno.test("2604 * 1812", () => {
  const res = mul(["2604", "1812"]);
  assertEquals(res, "4718448");
});

Deno.test("0.1 * 1", () => {
  const res = mul(["0.1", "1"]);
  assertEquals(res, "0.1");
});

Deno.test("0.1 * 2", () => {
  const res = mul(["0.1", "2"]);
  assertEquals(res, "0.2");
});

Deno.test("2 * 0.1", () => {
  const res = mul(["2", "0.1"]);
  assertEquals(res, "0.2");
});

Deno.test("0.002 * 0.1", () => {
  const res = mul(["0.002", "0.1"]);
  assertEquals(res, "0.0002");
});

Deno.test("0.002 * 0.0003", () => {
  const res = mul(["0.002", "0.0003"]);
  assertEquals(res, "0.0000006");
});

Deno.test("222 * 0.0003", () => {
  const res = mul(["222", "0.0003"]);
  assertEquals(res, "0.0666");
});

Deno.test("0.0003 * 222", () => {
  const res = mul(["0.0003", "222"]);
  assertEquals(res, "0.0666");
});

Deno.test("0.3 * 222", () => {
  const res = mul(["0.3", "222"]);
  assertEquals(res, "66.6");
});

Deno.test("222 * 0.3", () => {
  const res = mul(["222", "0.3"]);
  assertEquals(res, "66.6");
});

Deno.test("0.000123 * 0.03", () => {
  const res = mul(["0.000123", "0.03"]);
  assertEquals(res, "0.00000369");
});

Deno.test("0.00012 * 0.034", () => {
  const res = mul(["0.00012", "0.034"]);
  assertEquals(res, "0.00000408");
});

Deno.test("999 * 999", () => {
  const res = mul(["999", "999"]);
  assertEquals(res, "998001");
});

Deno.test("9.99 * 99.9", () => {
  const res = mul(["9.99", "99.9"]);
  assertEquals(res, "998.001");
});

Deno.test("9.99 * 0.999", () => {
  const res = mul(["9.99", "0.999"]);
  assertEquals(res, "9.98001");
});

Deno.test("9.99 * 0.00999", () => {
  const res = mul(["9.99", "0.00999"]);
  assertEquals(res, "0.0998001");
});

Deno.test("0.999 * 0.00999", () => {
  const res = mul(["0.999", "0.00999"]);
  assertEquals(res, "0.00998001");
});

Deno.test("0.0999 * 0.00999", () => {
  const res = mul(["0.0999", "0.00999"]);
  assertEquals(res, "0.000998001");
});

Deno.test("9.99 * 0.999", () => {
  const res = mul(["9.99", "0.999"]);
  assertEquals(res, "9.98001");
});

Deno.test("100.5 * 2", () => {
  const res = mul(["100.5", "2"]);
  assertEquals(res, "201");
});

Deno.test("100 * 0.01", () => {
  const res = mul(["100", "0.01"]);
  assertEquals(res, "1");
});

Deno.test("10 * 0.01", () => {
  const res = mul(["10", "0.01"]);
  assertEquals(res, "0.1");
});

Deno.test("5 * 3", () => {
  const res = mul(["5", "3"]);
  assertEquals(res, "15");
});


Deno.test("5 * -3", () => {
  const res = mul(["5", "-3"]);
  assertEquals(res, "-15");
});


Deno.test("-5 * 3", () => {
  const res = mul(["-5", "3"]);
  assertEquals(res, "-15");
});


Deno.test("-5 * -3", () => {
  const res = mul(["-5", "-3"]);
  assertEquals(res, "15");
});

Deno.test("4.5 * -9", () => {
  const res = mul(["4.5", "-9"]);
  assertEquals(res, "-40.5");
});

Deno.test("-8 * -9.5", () => {
  const res = mul(["-8", "-9.5"]);
  assertEquals(res, "76");
});

Deno.test("0 * -6", () => {
  const res = mul(["0", "-6"]);
  assertEquals(res, "0");
});

Deno.test("-6 * 0", () => {
  const res = mul(["-6", "0"]);
  assertEquals(res, "0");
});

Deno.test("0 * 5.6 * -2.6 * 1 * -10", () => {
  const res = mul(["0", "5.6", "-2.6", "1", "-10"]);
  assertEquals(res, "0");
});

Deno.test("-0 * 5.6 * -2.6 * 1 * -10", () => {
  const res = mul(["-0", "5.6", "-2.6", "1", "-10"]);
  assertEquals(res, "0");
});

Deno.test("1 * 5.6 * -2.6 * 0 * -10", () => {
  const res = mul(["1", "5.6", "-2.6", "0", "-10"]);
  assertEquals(res, "0");
});

Deno.test("1 * 5.6 * -2.6 * -0 * -10", () => {
  const res = mul(["1", "5.6", "-2.6", "-0", "-10"]);
  assertEquals(res, "0");
});

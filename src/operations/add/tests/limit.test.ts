import { assertEquals } from "jsr:@std/assert";
import { add } from "../../../../index.ts";

const limit = "8000000000000000";
const limitPlusOne = "8000000000000001";
const limitMinusOne = "7999999999999999";
const negativeLimit = "-8000000000000000";
const negativeLimitPlusOne = "-7999999999999999";
const negativeLimitMinusOne = "-8000000000000001";

Deno.test("9 + 1 + 9 + 9 + 1 + limit", () => {
  const res = add(["9", "1", "9", "9", "1", limit]);
  assertEquals(res, "8000000000000029");
});

Deno.test("9 + 1 + 9 + 9 + 1 + limit + 1 + 9 + 35", () => {
  const res = add(["9", "1", "9", "9", "1", limit, "1", "9", "35"]);
  assertEquals(res, "8000000000000074");
});

Deno.test("9 + 1 + 9 + 9 + 1 + limit + 1 + limit + 9 + 35", () => {
  const res = add(["9", "1", "9", "9", "1", limit, "1", limit, "9", "35"]);
  assertEquals(res, "16000000000000074");
});

Deno.test("7999999999999999 + 1 + 1 + 9 ", () => {
  const res = add(["7999999999999999", "1", "1", "9"]);
  assertEquals(res, "8000000000000010");
});

Deno.test("7999999999999999 + limit + limit + 1 + 1 + 9 ", () => {
  const res = add(["7999999999999999", limit, limit,"1", "1", "9"]);
  assertEquals(res, "24000000000000010");
});
//------------------------
Deno.test("Positive limit: just limit", () => {
  const res = add([limit]);
  assertEquals(res, limit);
});

Deno.test("Positive limit: limit + 0", () => {
  const res = add([limit, "0"]);
  assertEquals(res, limit);
});

Deno.test("Positive limit: 0 + limit", () => {
  const res = add(["0", limit]);
  assertEquals(res, limit);
});

Deno.test("Positive limit: limit + 1 (overflow)", () => {
  const res = add([limit, "1"]);
  assertEquals(res, limitPlusOne);
});

Deno.test("Positive limit: 1 + limit (overflow)", () => {
  const res = add(["1", limit]);
  assertEquals(res, limitPlusOne);
});

Deno.test("Positive limit: limit - 1", () => {
  const res = add([limit, "-1"]);
  assertEquals(res, limitMinusOne);
});

Deno.test("Positive limit: -1 + limit", () => {
  const res = add(["-1", limit]);
  assertEquals(res, limitMinusOne);
});

Deno.test("Positive limit: limit + small positive numbers", () => {
  const res = add([limit, "2", "3", "4"]);
  assertEquals(res, "8000000000000009");
});

Deno.test("Positive limit: small positive numbers + limit", () => {
  const res = add(["4", "3", "2", limit]);
  assertEquals(res, "8000000000000009");
});

Deno.test("Positive limit: limit + small negative numbers", () => {
  const res = add([limit, "-2", "-3", "-4"]);
  assertEquals(res, "7999999999999991");
});

Deno.test("Positive limit: small negative numbers + limit", () => {
  const res = add(["-4", "-3", "-2", limit]);
  assertEquals(res, "7999999999999991");
});

Deno.test("Positive limit: limit + limit", () => {
  const res = add([limit, limit]);
  assertEquals(res, "16000000000000000");
});

Deno.test("Positive limit: limit + limit + 1", () => {
  const res = add([limit, limit, "1"]);
  assertEquals(res, "16000000000000001");
});

Deno.test("Positive limit: limit + limit - 1", () => {
  const res = add([limit, limit, "-1"]);
  assertEquals(res, "15999999999999999");
});

Deno.test("Negative limit: just negative limit", () => {
  const res = add([negativeLimit]);
  assertEquals(res, negativeLimit);
});

Deno.test("Negative limit: negative limit + 0", () => {
  const res = add([negativeLimit, "0"]);
  assertEquals(res, negativeLimit);
});

Deno.test("Negative limit: 0 + negative limit", () => {
  const res = add(["0", negativeLimit]);
  assertEquals(res, negativeLimit);
});

Deno.test("Negative limit: negative limit - 1 (overflow)", () => {
  const res = add([negativeLimit, "-1"]);
  assertEquals(res, negativeLimitMinusOne);
});

Deno.test("Negative limit: -1 + negative limit (overflow)", () => {
  const res = add(["-1", negativeLimit]);
  assertEquals(res, negativeLimitMinusOne);
});

Deno.test("Negative limit: negative limit + 1", () => {
  const res = add([negativeLimit, "1"]);
  assertEquals(res, negativeLimitPlusOne);
});

Deno.test("Negative limit: 1 + negative limit", () => {
  const res = add(["1", negativeLimit]);
  assertEquals(res, negativeLimitPlusOne);
});

Deno.test("Negative limit: negative limit + small positive numbers", () => {
  const res = add([negativeLimit, "2", "3", "4"]);
  assertEquals(res, "-7999999999999991");
});

Deno.test("Negative limit: small positive numbers + negative limit", () => {
  const res = add(["4", "3", "2", negativeLimit]);
  assertEquals(res, "-7999999999999991");
});

Deno.test("Negative limit: negative limit + small negative numbers", () => {
  const res = add([negativeLimit, "-2", "-3", "-4"]);
  assertEquals(res, "-8000000000000009");
});

Deno.test("Negative limit: small negative numbers + negative limit", () => {
  const res = add(["-4", "-3", "-2", negativeLimit]);
  assertEquals(res, "-8000000000000009");
});

Deno.test("Negative limit: negative limit + negative limit", () => {
  const res = add([negativeLimit, negativeLimit]);
  assertEquals(res, "-16000000000000000");
});

Deno.test("Negative limit: negative limit + negative limit + 1", () => {
  const res = add([negativeLimit, negativeLimit, "1"]);
  assertEquals(res, "-15999999999999999");
});

Deno.test("Negative limit: negative limit + negative limit - 1", () => {
  const res = add([negativeLimit, negativeLimit, "-1"]);
  assertEquals(res, "-16000000000000001");
});

Deno.test("Mixed limits: limit + negative limit", () => {
  const res = add([limit, negativeLimit]);
  assertEquals(res, "0");
});

Deno.test("Mixed limits: negative limit + limit", () => {
  const res = add([negativeLimit, limit]);
  assertEquals(res, "0");
});

Deno.test("Mixed limits: limit + negative limit + 1", () => {
  const res = add([limit, negativeLimit, "1"]);
  assertEquals(res, "1");
});

Deno.test("Mixed limits: limit + negative limit - 1", () => {
  const res = add([limit, negativeLimit, "-1"]);
  assertEquals(res, "-1");
});

Deno.test("Positive limit with floats: limit + 0.1", () => {
  const res = add([limit, "0.1"]);
  assertEquals(res, "8000000000000000.1");
});

Deno.test("Positive limit with floats: 0.1 + limit", () => {
  const res = add(["0.1", limit]);
  assertEquals(res, "8000000000000000.1");
});

Deno.test("Positive limit with floats near limit: 7999999999999999.9 + 0.1", () => {
  const res = add(["7999999999999999.9", "0.1"]);
  assertEquals(res, "8000000000000000");
});

Deno.test("Negative limit with floats: negative limit - 0.1", () => {
  const res = add([negativeLimit, "-0.1"]);
  assertEquals(res, "-8000000000000000.1");
});

Deno.test("Negative limit with floats: -0.1 + negative limit", () => {
  const res = add(["-0.1", negativeLimit]);
  assertEquals(res, "-8000000000000000.1");
});

Deno.test("Negative limit with floats near limit: -7999999999999999.9 - 0.1", () => {
  const res = add(["-7999999999999999.9", "-0.1"]);
  assertEquals(res, "-8000000000000000");
});

Deno.test("Multiple limits: limit + limit + limit", () => {
  const res = add([limit, limit, limit]);
  assertEquals(res, "24000000000000000");
});

Deno.test("Multiple negative limits: negative limit + negative limit + negative limit", () => {
  const res = add([negativeLimit, negativeLimit, negativeLimit]);
  assertEquals(res, "-24000000000000000");
});

Deno.test("Mixed multiple limits: limit + negative limit + limit + negative limit", () => {
  const res = add([limit, negativeLimit, limit, negativeLimit]);
  assertEquals(res, "0");
});

Deno.test("Limit with integer and float: limit + 1.5", () => {
  const res = add([limit, "1.5"]);
  assertEquals(res, "8000000000000001.5");
});

Deno.test("Limit with integer and float: -2 + negative limit + 0.5", () => {
  const res = add(["-2", negativeLimit, "0.5"]);
  assertEquals(res, "-8000000000000001.5");
});

Deno.test("Near positive limit with larger float: 7999999999999999 + 1.1", () => {
  const res = add(["7999999999999999", "1.1"]);
  assertEquals(res, "8000000000000000.1");
});

Deno.test("Near negative limit with larger float: -7999999999999999 + (-1.1)", () => {
  const res = add(["-7999999999999999", "-1.1"]);
  assertEquals(res, "-8000000000000000.1");
});

Deno.test("Positive limit with small float subtraction", () => {
  const res = add([limit, "-0.0001"]);
  assertEquals(res, "7999999999999999.9999");
});

Deno.test("Negative limit with small float addition", () => {
  const res = add([negativeLimit, "0.0001"]);
  assertEquals(res, "-7999999999999999.9999");
});

Deno.test("Multiple additions crossing positive limit", () => {
  const res = add(["7999999999999998", "1", "1", "1"]);
  assertEquals(res, "8000000000000001");
});

Deno.test("Multiple additions crossing negative limit", () => {
  const res = add(["-7999999999999998", "-1", "-1", "-1"]);
  assertEquals(res, "-8000000000000001");
});

Deno.test("Adding numbers that individually don't exceed limit but their sum does", () => {
  const halfLimit = "4000000000000000";
  const res = add([halfLimit, halfLimit, "1"]);
  assertEquals(res, "8000000000000001");
});

Deno.test("Adding negative numbers that individually don't exceed negative limit but their sum does", () => {
  const halfNegativeLimit = "-4000000000000000";
  const res = add([halfNegativeLimit, halfNegativeLimit, "-1"]);
  assertEquals(res, "-8000000000000001");
});
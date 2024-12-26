import { assertEquals } from "jsr:@std/assert";
import { sub } from "../index.ts";

Deno.test("1001 - 9", () => {
  const result = sub("1001", "9");
  assertEquals(result, "992");
});

Deno.test("0.9 - 0.1", () => {
  const result = sub("0.9", "0.1");
  assertEquals(result, "0.8");
});

Deno.test("12 - 21", () => {
  const result = sub("12", "21");
  assertEquals(result, "-9");
});

Deno.test("20 - 12", () => {
  const result = sub("28", "12");
  assertEquals(result, "16");
});

Deno.test("29 - 19", () => {
  const result = sub("29", "19");
  assertEquals(result, "10");
});

Deno.test("189 - 29", () => {
  const result = sub("189", "29");
  assertEquals(result, "160");
});

Deno.test("1589 - 529", () => {
  const result = sub("1589", "529");
  assertEquals(result, "1060");
});

Deno.test("529 - 1589", () => {
  const result = sub("529", "1589");
  assertEquals(result, "1060");
});

Deno.test("621 - 529", () => {
  const result = sub("621", "529");
  assertEquals(result, "92");
});

Deno.test("1000 - 1", () => {
  const result = sub("1000", "1");
  assertEquals(result, "999");
});

Deno.test("1001 - 1", () => {
  const result = sub("1001", "1");
  assertEquals(result, "1000");
});

Deno.test("1001 - 0", () => {
  const result = sub("1001", "0");
  assertEquals(result, "1001");
});

Deno.test("1001 - 10", () => {
  const result = sub("1001", "10");
  assertEquals(result, "991");
});

Deno.test("1001 - 9", () => {
  const result = sub("1001", "9");
  assertEquals(result, "992");
});

Deno.test("1001 - 9000", () => {
  const result = sub("1001", "9000");
  assertEquals(result, "-7999");
});

Deno.test("1001 - 9009", () => {
  const result = sub("1001", "9009");
  assertEquals(result, "-8008");
});

Deno.test("1001 - 9999", () => {
  const result = sub("1001", "9999");
  assertEquals(result, "-8998");
});

Deno.test("1111 - 999", () => {
  const result = sub("1111", "999");
  assertEquals(result, "112");
});

Deno.test("1101 - 999", () => {
  const result = sub("1101", "999");
  assertEquals(result, "102");
});

Deno.test("1011 - 909", () => {
  const result = sub("1011", "909");
  assertEquals(result, "102");
});

Deno.test("1011 - 111", () => {
  const result = sub("1011", "111");
  assertEquals(result, "900");
});

Deno.test("1011 - 101", () => {
  const result = sub("1011", "101");
  assertEquals(result, "910");
});

Deno.test("222.22 - 11.111", () => {
  const result = sub("222.22", "11.111");
  assertEquals(result, "211.109");
});

Deno.test("1.11 - 0.999", () => {
  const result = sub("1.11", "0.999");
  assertEquals(result, "0.111");
});

Deno.test("10.01 - 0.1", () => {
  const result = sub("10.01", "0.1");
  assertEquals(result, "9.91");
});

Deno.test("10.01 - 0.12", () => {
  const result = sub("10.01", "0.12");
  assertEquals(result, "9.89");
});

Deno.test("10 - 0.12", () => {
  const result = sub("10", "0.12");
  assertEquals(result, "9.88");
});

Deno.test("10.12 - 1", () => {
  const result = sub("10.12", "1");
  assertEquals(result, "9.12");
});

Deno.test("1.12 - 0.12", () => {
  const result = sub("1.12", "0.12");
  assertEquals(result, "1");
});

Deno.test("0.12 - 1.12", () => {
  const result = sub("0.12", "1.12");
  assertEquals(result, "-1");
});

Deno.test("111 - 11", () => {
  const result = sub("111", "11");
  assertEquals(result, "100");
});

Deno.test("100.1 - 0.1", () => {
  const result = sub("100.1", "0.1");
  assertEquals(result, "100");
});

Deno.test("999.9 - 999.1", () => {
  const result = sub("999.9", "999.1");
  assertEquals(result, "0.8");
});

import { assertEquals } from "jsr:@std/assert";
import { sub } from "../main.ts";

Deno.test("-999 - -999 - -999", () => {
  const result = sub(["-999", "-999", "-999"]);
  assertEquals(result, "999");
});

Deno.test("999.1 - 999", () => {
  const result = sub(["999.1", "999"]);
  assertEquals(result, "0.1");
});

Deno.test("999 - 999.1", () => {
  const result = sub(["999", "999.1"]);
  assertEquals(result, "-0.1");
});

Deno.test("999.9 - 999.9 - 999.9", () => {
  const result = sub(Array(12).fill("999.9"));
  assertEquals(result, "-9999");
});

Deno.test("999.9 x12", () => {
  const result = sub(Array(12).fill("999.9"));
  assertEquals(result, "-9999");
});

Deno.test("990.099 x12", () => {
  const result = sub(Array(12).fill("990.099"));
  assertEquals(result, "-9900.99");
});

Deno.test("990.099 x55", () => {
  const result = sub(Array(55).fill("990.099"));
  assertEquals(result, "-52475.247");
});

Deno.test("9 x12", () => {
  const result = sub(Array(12).fill("9"));
  assertEquals(result, "-90");
});

Deno.test("999 x12", () => {
  const result = sub(Array(12).fill("999"));
  assertEquals(result, "-9990");
});

Deno.test("0.9 x12", () => {
  const result = sub(Array(12).fill("0.9"));
  assertEquals(result, "-9");
});

Deno.test("0.09 x12", () => {
  const result = sub(Array(12).fill("0.09"));
  assertEquals(result, "-0.9");
});

Deno.test("0.009 x12", () => {
  const result = sub(Array(12).fill("0.009"));
  assertEquals(result, "-0.09");
});

Deno.test("-0.009 x12", () => {
  const result = sub(Array(12).fill("-0.009"));
  assertEquals(result, "0.09");
});
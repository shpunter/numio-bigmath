import { assertEquals } from "jsr:@std/assert";
import { round } from "../main.ts";

Deno.test("123", () => {
  const res = round("123");
  assertEquals(res, "123");
});

Deno.test("100", () => {
  const res = round("100");
  assertEquals(res, "100");
});

Deno.test("-100", () => {
  const res = round("-100");
  assertEquals(res, "-100");
});

Deno.test("-1.12345", () => {
  const res = round("-1.12345");
  assertEquals(res, "-1");
});

Deno.test("-1.52345", () => {
  const res = round("-1.52345");
  assertEquals(res, "-2");
});

Deno.test("1.52345", () => {
  const res = round("1.52345");
  assertEquals(res, "2");
});

Deno.test("0.001", () => {
  const res = round("0.001");
  assertEquals(res, "0");
});

Deno.test("-0.001", () => {
  const res = round("-0.001");
  assertEquals(res, "0");
});

Deno.test("1.0000001", () => {
  const res = round("1.00000001");
  assertEquals(res, "1");
});

Deno.test("9.9", () => {
  const res = round("9.9");
  assertEquals(res, "10");
});

Deno.test("999.9", () => {
  const res = round("999.9");
  assertEquals(res, "1000");
});

Deno.test("1.12345 up", () => {
  const res = round("1.12345", { roundMode: "up", decimals: 1 });
  assertEquals(res, "1.2");
});

Deno.test("1.19 down", () => {
  const res = round("1.19", { roundMode: "down", decimals: 1 });
  assertEquals(res, "1.1");
});

Deno.test("1.15 half-up", () => {
  const res = round("1.15", { roundMode: "half-up", decimals: 1 });
  assertEquals(res, "1.2");
});

Deno.test("1.15 half-down", () => {
  const res = round("1.15", { roundMode: "half-down", decimals: 1 });
  assertEquals(res, "1.1");
});

Deno.test("1.15 half-even", () => {
  const res = round("1.15", { roundMode: "half-even", decimals: 1 });
  assertEquals(res, "1.2");
});

Deno.test("1.25 half-even", () => {
  const res = round("1.25", { roundMode: "half-even", decimals: 1 });
  assertEquals(res, "1.2");
});

Deno.test("1.25 half-odd", () => {
  const res = round("1.25", { roundMode: "half-odd", decimals: 1 });
  assertEquals(res, "1.3");
});

Deno.test("1.15 half-odd", () => {
  const res = round("1.15", { roundMode: "half-odd", decimals: 1 });
  assertEquals(res, "1.1");
});

Deno.test("1.2 up", () => {
  const res = round("1.2", { roundMode: "up" });
  assertEquals(res, "2");
});

Deno.test("1.02 up", () => {
  const res = round("1.02", { roundMode: "up" });
  assertEquals(res, "1");
});

Deno.test("1.02 down", () => {
  const res = round("1.02", { roundMode: "down" });
  assertEquals(res, "1");
});

Deno.test("1.9 down", () => {
  const res = round("1.9", { roundMode: "down" });
  assertEquals(res, "1");
});

Deno.test("1.5 half-down", () => {
  const res = round("1.5", { roundMode: "half-down" });
  assertEquals(res, "1");
});

Deno.test("1.5 half-up", () => {
  const res = round("1.5", { roundMode: "half-up" });
  assertEquals(res, "2");
});

Deno.test("1.5 half-even", () => {
  const res = round("1.5", { roundMode: "half-even" });
  assertEquals(res, "2");
});

Deno.test("2.5 half-even", () => {
  const res = round("2.5", { roundMode: "half-even" });
  assertEquals(res, "2");
});

Deno.test("2.5 half-odd", () => {
  const res = round("2.5", { roundMode: "half-odd" });
  assertEquals(res, "3");
});

Deno.test("3.5 half-odd", () => {
  const res = round("3.5", { roundMode: "half-odd" });
  assertEquals(res, "3");
});

Deno.test("3.5 half-up", () => {
  const res = round("3.5", { roundMode: "half-up", decimals: 2 });
  assertEquals(res, "3.5");
});

Deno.test("3 half-up", () => {
  const res = round("3", { roundMode: "half-up", decimals: 2 });
  assertEquals(res, "3");
});

Deno.test("-0.09 down", () => {
  const res = round("-0.09", { roundMode: "down", decimals: 3 });
  assertEquals(res, "-0.09");
});

Deno.test("-0.09 down", () => {
  const res = round("-0.09", { roundMode: "down", decimals: 2 });
  assertEquals(res, "-0.09");
});

Deno.test("-0.09 down", () => {
  const res = round("-0.09", { roundMode: "down", decimals: 1 });
  assertEquals(res, "0");
});

Deno.test("-0.09 up", () => {
  const res = round("-0.01", { roundMode: "up", decimals: 1 });
  assertEquals(res, "-0.1");
});

Deno.test("0.07999 up", () => {
  const res = round("0.07999", { roundMode: "up", decimals: 4 });
  assertEquals(res, "0.08");
});

Deno.test("0.000091", () => {
  const res = round("0.000091", { decimals: 1, sigFig: true });
  assertEquals(res, "0.00009");
});

Deno.test("0.000091", () => {
  const res = round("0.000091", { decimals: 1 });
  assertEquals(res, "0");
});

Deno.test("0.9000091", () => {
  const res = round("0.9000091", { decimals: 0 });
  assertEquals(res, "1");
});

Deno.test("0.9900091", () => {
  const res = round("0.9900091", { decimals: 1 });
  assertEquals(res, "1");
});

Deno.test("9.9000091", () => {
  const res = round("9.9000091", { decimals: 1 });
  assertEquals(res, "9.9");
});

Deno.test("9.9900091", () => {
  const res = round("9.9900091", { decimals: 1 });
  assertEquals(res, "10");
});

Deno.test("0.00009589", () => {
  const res = round("0.00009589", { decimals: 1, sigFig: true });
  assertEquals(res, "0.0001");
});

Deno.test("0.0000111", () => {
  const res = round("0.0000111", {
    decimals: 1,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "0.00002");
});

Deno.test("0.0000199", () => {
  const res = round("0.0000199", {
    decimals: 1,
    sigFig: true,
    roundMode: "down",
  });
  assertEquals(res, "0.00001");
});

Deno.test("10.0000199", () => {
  const res = round("10.0000199", {
    decimals: 1,
    sigFig: true,
    roundMode: "down",
  });
  assertEquals(res, "10");
});

Deno.test("10.0000199", () => {
  const res = round("10.0000199", { decimals: 1, roundMode: "down" });
  assertEquals(res, "10");
});

Deno.test("-10.0000199", () => {
  const res = round("-10.0000199", { decimals: 1, roundMode: "down" });
  assertEquals(res, "-10");
});

Deno.test("0.0000111", () => {
  const res = round("0.0000111", {
    decimals: 1,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "0.00002");
});

Deno.test("0.0000101", () => {
  const res = round("0.0000101", {
    decimals: 1,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "0.00001");
});

Deno.test("0.0000101", () => {
  const res = round("0.0000101", {
    decimals: 2,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "0.000011");
});

Deno.test("0.00001001", () => {
  const res = round("0.00001001", {
    decimals: 1,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "0.00001");
});

Deno.test("1.00001001", () => {
  const res = round("1.00001001", {
    decimals: 1,
    sigFig: true,
    roundMode: "up",
  });
  assertEquals(res, "1");
});

Deno.test("0.0019", () => {
  const res = round("0.0019", { decimals: 1, sigFig: true, roundMode: "down" });
  assertEquals(res, "0.001");
});

Deno.test("0.0011", () => {
  const res = round("0.0011", { decimals: 1, sigFig: true, roundMode: "up" });
  assertEquals(res, "0.002");
});

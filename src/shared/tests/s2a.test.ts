import { assertEquals } from "jsr:@std/assert";
import { s2a } from "../utils.ts";

Deno.test("-9.5", () => {
  assertEquals(s2a("-9.5"), {
    array: [57, 53],
    intLength: 1,
    isNegative: true,
    isFloat: true,
  });
});

Deno.test("9.5", () => {
  assertEquals(s2a("9.5"), {
    array: [57, 53],
    intLength: 1,
    isNegative: false,
    isFloat: true,
  });
});

Deno.test("95", () => {
  assertEquals(s2a("95"), {
    array: [57, 53],
    intLength: 2,
    isNegative: false,
    isFloat: false,
  });
});

Deno.test("-95", () => {
  assertEquals(s2a("-95"), {
    array: [57, 53],
    intLength: 2,
    isNegative: true,
    isFloat: false,
  });
});

Deno.test("-0", () => {
  assertEquals(s2a("-0"), {
    array: [48],
    intLength: 0,
    isNegative: true,
    isFloat: false,
  });
});

Deno.test("0", () => {
  assertEquals(s2a("0"), {
    array: [48],
    intLength: 0,
    isNegative: false,
    isFloat: false,
  });
});

Deno.test("0.1", () => {
  assertEquals(s2a("0.1"), {
    array: [49],
    intLength: 0,
    isNegative: false,
    isFloat: true,
  });
});

Deno.test("1.1", () => {
  assertEquals(s2a("1.1"), {
    array: [49, 49],
    intLength: 1,
    isNegative: false,
    isFloat: true,
  });
});

Deno.test("1.89", () => {
  assertEquals(s2a("1.89"), {
    array: [49, 56, 57],
    intLength: 1,
    isNegative: false,
    isFloat: true,
  });
});
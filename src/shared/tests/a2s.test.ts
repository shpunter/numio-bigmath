import { assertEquals } from "jsr:@std/assert";
import { a2s } from "../utils.ts";

Deno.test("-9.5", () => {
  assertEquals(
    a2s({
      array: [57, 53],
      intLength: 1,
      isNegative: true,
      isFloat: true,
    }),
    "-9.5",
  );
});

Deno.test("9.5", () => {
  assertEquals(
    a2s({
      array: [57, 53],
      intLength: 1,
      isNegative: false,
      isFloat: true,
    }),
    "9.5",
  );
});

Deno.test("95", () => {
  assertEquals(
    a2s({
      array: [57, 53],
      intLength: 2,
      isNegative: false,
      isFloat: false,
    }),
    "95",
  );
});

Deno.test("-95", () => {
  assertEquals(
    a2s({
      array: [57, 53],
      intLength: 2,
      isNegative: true,
      isFloat: false,
    }),
    "-95",
  );
});

Deno.test("-0", () => {
  assertEquals(
    a2s({
      array: [48],
      intLength: 1,
      isNegative: true,
      isFloat: false,
    }),
    "-0",
  );
});

Deno.test("0.1", () => {
  assertEquals(
    a2s({
      array: [49],
      intLength: 0,
      isNegative: false,
      isFloat: true,
    }),
    "0.1",
  );
});

Deno.test("1.1", () => {
  assertEquals(
    a2s({
      array: [49, 49],
      intLength: 1,
      isNegative: false,
      isFloat: true,
    }),
    "1.1",
  );
});

Deno.test("1.89", () => {
  assertEquals(
    a2s({
      array: [49, 56, 57],
      intLength: 1,
      isNegative: false,
      isFloat: true,
    }),
    "1.89",
  );
});

Deno.test("0.000", () => {
  assertEquals(
    a2s({
      array: [48, 48, 48],
      intLength: 0,
      isNegative: false,
      isFloat: true,
    }),
    "0",
  );
});

Deno.test("2.000", () => {
  assertEquals(
    a2s({
      array: [50, 48, 48, 48],
      intLength: 1,
      isNegative: false,
      isFloat: true,
    }),
    "2",
  );
});

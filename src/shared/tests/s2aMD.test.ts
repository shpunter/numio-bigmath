import { assertEquals } from "jsr:@std/assert";
import { s2aMD } from "../utils.ts";

Deno.test("-9.5", () => {
  assertEquals(s2aMD("-9.5"), {
    array: [57, 53],
    intLength: 1,
    isNegative: true,
    isFloat: true,
  });
});

Deno.test("9.5", () => {
  assertEquals(s2aMD("9.5"), {
    array: [57, 53],
    intLength: 1,
    isNegative: false,
    isFloat: true,
  });
});

Deno.test("95", () => {
  assertEquals(s2aMD("95"), {
    array: [57, 53],
    intLength: 2,
    isNegative: false,
    isFloat: false,
  });
});

Deno.test("-95", () => {
  assertEquals(s2aMD("-95"), {
    array: [57, 53],
    intLength: 2,
    isNegative: true,
    isFloat: false,
  });
});

Deno.test("-0", () => {
  assertEquals(s2aMD("-0"), {
    array: [48],
    intLength: 1,
    isNegative: false,
    isFloat: false,
  });
});
import { assertEquals } from "jsr:@std/assert/equals";
import { MAD } from "../mad.ts";

Deno.test("MAD [11, 12, 12, 14, 15, 16]", () => {
  const res = MAD(["11", "12", "12", "14", "15", "16"]);
  assertEquals(res, "1.5");
});

Deno.test("MAD [1, 1, 1, 1, 1, 1, 100]", () => {
  const res = MAD(["1", "1", "1", "1", "1", "1", "100"]);
  assertEquals(res, "0");
});

Deno.test("MAD [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 100]", () => {
  const res = MAD(["0.1", "0.1", "0.1", "0.1", "0.1", "0.1", "100"]);
  assertEquals(res, "0");
});

Deno.test("MAD [7, 15, 36, 39, 40, 41]", () => {
  const res = MAD(["7", "15", "36", "39", "40", "41"]);

  assertEquals(res, "3");
});

Deno.test("MAD [1, 1, 2, 2, 4, 6, 9]", () => {
  const res = MAD(["1", "1", "2", "2", "4", "6", "9"]);

  assertEquals(res, "1");
});

Deno.test("MAD [1, 1, 1, 1, 1, 1, 100]", () => {
  const res = MAD(["1", "1", "1", "1", "1", "1", "100"]);

  assertEquals(res, "0");
});

Deno.test("MAD [-11, -12, -12, -14, -15, -16]", () => {
  const res = MAD(["-11", "-12", "-12", "-14", "-15", "-16"]);
  assertEquals(res, "1.5");
});

Deno.test("MAD [-1, -1, -1, -1, -1, -1, -100]", () => {
  const res = MAD(["-1", "-1", "-1", "-1", "-1", "-1", "-100"]);
  assertEquals(res, "0");
});

Deno.test("MAD [-3, -2, -1]", () => {
  const res = MAD(["-3", "-2", "-1"]);

  assertEquals(res, "1");
});

Deno.test("MAD [-41, -40, -39, -36, -15, -7]", () => {
  const res = MAD(["-41", "-40", "-39", "-36", "-15", "-7"]);

  assertEquals(res, "3");
});

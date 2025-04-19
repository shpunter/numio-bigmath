import { assertEquals } from "jsr:@std/assert/equals";
import { IQR } from "../main.ts";

Deno.test("1, 2, 3, 4, 5", () => {
  const res = IQR(["1", "2", "3", "4", "5"]);

  assertEquals(res, "3");
});

Deno.test("1, 1, 1, 1, 1, 1, 100", () => {
  const res = IQR(["1", "1", "1", "1", "1", "1", "100"]);

  assertEquals(res, "0");
});

Deno.test("[1, 1, 1, 1, 1, 1, 100], sig num", () => {
  const res = IQR(["1", "1", "1", "1", "1", "1", "100"], true);

  assertEquals(res, "1");
});

Deno.test("[6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49]", () => {
  const res = IQR(["6", "7", "15", "36", "39", "40", "41", "42", "43", "47", "49"]);

  assertEquals(res, "28");
});

Deno.test("[7, 15, 36, 39, 40, 41]", () => {
  const res = IQR(["7", "15", "36", "39", "40", "41"]);

  assertEquals(res, "25");
});






import { assertEquals } from "jsr:@std/assert/equals";
import { isEqual } from "../../../index.ts";

Deno.test("left: 1, right: 1", () => {
  const res = isEqual({ left: "1", right: "1" });

  assertEquals(res, true);
});

Deno.test("left: -1, right: 1", () => {
  const res = isEqual({ left: "-1", right: "1" });

  assertEquals(res, false);
});

Deno.test("left: 1, right: -1", () => {
  const res = isEqual({ left: "1", right: "-1" });

  assertEquals(res, false);
});

Deno.test("left: 0.1, right: 0.1", () => {
  const res = isEqual({ left: "0.1", right: "0.1" });

  assertEquals(res, true);
});

Deno.test("left: 0.01, right: 0.1", () => {
  const res = isEqual({ left: "0.01", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: 0.1, right: 1", () => {
  const res = isEqual({ left: "0.1", right: "1" });

  assertEquals(res, false);
});

Deno.test("left: 1, right: 0.1", () => {
  const res = isEqual({ left: "1", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: 0, right: 0", () => {
  const res = isEqual({ left: "0", right: "0" });

  assertEquals(res, true);
});

Deno.test("left: -0, right: 0", () => {
  const res = isEqual({ left: "-0", right: "0" });

  assertEquals(res, true);
});
import { assertEquals } from "@std/assert/equals";
import { isLeftGreaterOrEqual } from "../isLeftGreaterOrEqual.ts";

Deno.test("left: -0.1, right: 0", () => {
  const res = isLeftGreaterOrEqual({ left: "-0.1", right: "0" });

  assertEquals(res, false);
});

Deno.test("left: 0, right: -0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "0", right: "-0.1" });

  assertEquals(res, true);
});

Deno.test("left: -0.1, right: -0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "-0.1", right: "-0.1" });

  assertEquals(res, true);
});

Deno.test("left: 0.1, right: -0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "0.1", right: "-0.1" });

  assertEquals(res, true);
});

Deno.test("left: -0.1, right: 0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "-0.1", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: 1, right: 1", () => {
  const res = isLeftGreaterOrEqual({ left: "1", right: "1" });

  assertEquals(res, true);
});

Deno.test("left: -1, right: 1", () => {
  const res = isLeftGreaterOrEqual({ left: "-1", right: "1" });

  assertEquals(res, false);
});

Deno.test("left: 1, right: -1", () => {
  const res = isLeftGreaterOrEqual({ left: "1", right: "-1" });

  assertEquals(res, true);
});

Deno.test("left: 1, right: 0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "1", right: "0.1" });

  assertEquals(res, true);
});

Deno.test("left: -1, right: 0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "-1", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: 1, right: -0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "1", right: "-0.1" });

  assertEquals(res, true);
});

Deno.test("left: -1, right: -0.1", () => {
  const res = isLeftGreaterOrEqual({ left: "-1", right: "-0.1" });

  assertEquals(res, false);
});

Deno.test("left: 0.1, right: 1", () => {
  const res = isLeftGreaterOrEqual({ left: "0.1", right: "1" });

  assertEquals(res, false);
});

Deno.test("left: -0.1, right: 1", () => {
  const res = isLeftGreaterOrEqual({ left: "-0.1", right: "1" });

  assertEquals(res, false);
});

Deno.test("left: 0.1, right: -1", () => {
  const res = isLeftGreaterOrEqual({ left: "0.1", right: "-1" });

  assertEquals(res, true);
});

Deno.test("left: 0, right: 0", () => {
  const res = isLeftGreaterOrEqual({ left: "0", right: "0" });

  assertEquals(res, true);
});
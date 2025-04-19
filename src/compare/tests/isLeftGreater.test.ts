import { assertEquals } from "jsr:@std/assert/equals";
import { isLeftGreater } from "../main.ts";

Deno.test("left: 2, right: 0.3", () => {
  const res = isLeftGreater({ left: "2", right: "0.3" });

  assertEquals(res, true);
});

Deno.test("left: 0.3, right: 2", () => {
  const res = isLeftGreater({ left: "0.3", right: "2" });

  assertEquals(res, false);
});

Deno.test("left: -2, right: 0.3", () => {
  const res = isLeftGreater({ left: "-2", right: "0.3" });

  assertEquals(res, false);
});

Deno.test("left: -0.3, right: 2", () => {
  const res = isLeftGreater({ left: "-0.3", right: "2" });

  assertEquals(res, false);
});

Deno.test("left: 2, right: -0.3", () => {
  const res = isLeftGreater({ left: "2", right: "-0.3" });

  assertEquals(res, true);
});

Deno.test("left: 0.3, right: -2", () => {
  const res = isLeftGreater({ left: "0.3", right: "-2" });

  assertEquals(res, true);
});

Deno.test("left: 1, right: 1", () => {
  const res = isLeftGreater({ left: "1", right: "1" });

  assertEquals(res, false);
});
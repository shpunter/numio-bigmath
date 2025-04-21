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

Deno.test("left: 0.0000000000001, right: 0.37647058823529411765", () => {
  const res = isLeftGreater({
    left: "0.0000000000001",
    right: "0.37647058823529411765",
  });
  assertEquals(res, false);
});

Deno.test("left: 0.37647058823529411765, right: 0.0000000000001", () => {
  const res = isLeftGreater({
    left: "0.37647058823529411765",
    right: "0.0000000000001",
  });

  assertEquals(res, true);
});

Deno.test("left: 0.00000001, right: 0.1", () => {
  const res = isLeftGreater({ left: "0.00000001", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: 0.1, right: 0.00000001", () => {
  const res = isLeftGreater({ left: "0.1", right: "0.00000001" });

  assertEquals(res, true);
});

Deno.test("left: -0.00000001, right: 0.1", () => {
  const res = isLeftGreater({ left: "-0.00000001", right: "0.1" });

  assertEquals(res, false);
});

Deno.test("left: -0.1, right: 0.00000001", () => {
  const res = isLeftGreater({ left: "-0.1", right: "0.00000001" });

  assertEquals(res, false);
});

Deno.test("left: -0.00000001, right: -0.1", () => {
  const res = isLeftGreater({ left: "-0.00000001", right: "-0.1" });

  assertEquals(res, true);
});

Deno.test("left: -0.1, right: -0.00000001", () => {
  const res = isLeftGreater({ left: "-0.1", right: "-0.00000001" });

  assertEquals(res, false);
});

import { assertEquals } from "@std/assert/equals";
import { isBinary } from "../../../index.ts";

Deno.test("0b11", () => {
  assertEquals(isBinary("0b11"), true);
});

Deno.test("0b01", () => {
  assertEquals(isBinary("0b01"), true);
});

Deno.test("0b10", () => {
  assertEquals(isBinary("0b10"), true);
});

Deno.test("0b12", () => {
  assertEquals(isBinary("0b12"), false);
});

Deno.test("0b21", () => {
  assertEquals(isBinary("0b21"), false);
});

Deno.test("0b131", () => {
  assertEquals(isBinary("0b131"), false);
});

Deno.test("0b141", () => {
  assertEquals(isBinary("0b141"), false);
});

Deno.test("0b141", () => {
  assertEquals(isBinary("0b141"), false);
});

Deno.test("0b151", () => {
  assertEquals(isBinary("0b151"), false);
});

Deno.test("0b161", () => {
  assertEquals(isBinary("0b161"), false);
});

Deno.test("0b171", () => {
  assertEquals(isBinary("0b171"), false);
});

Deno.test("0b181", () => {
  assertEquals(isBinary("0b181"), false);
});

Deno.test("0b191", () => {
  assertEquals(isBinary("0b191"), false);
});

Deno.test("0b101", () => {
  assertEquals(isBinary("0b101"), true);
});

Deno.test("0b1 1", () => {
  assertEquals(isBinary("0b1 1"), false);
});

Deno.test("0b-101", () => {
  assertEquals(isBinary("0b-101"), false);
});

Deno.test("0b10.1", () => {
  assertEquals(isBinary("0b10.1"), false);
});

Deno.test("0b101.", () => {
  assertEquals(isBinary("0b101."), false);
});

Deno.test("00101", () => {
  assertEquals(isBinary("00101"), false);
});

Deno.test("b101", () => {
  assertEquals(isBinary("b101"), false);
});

Deno.test("101", () => {
  assertEquals(isBinary("101"), false);
});

Deno.test("b0101", () => {
  assertEquals(isBinary("b0101"), false);
});

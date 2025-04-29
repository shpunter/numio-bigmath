import { assertEquals } from "@std/assert/equals";
import { Pipe } from "../pipe.ts";

Deno.test("pipe.abs", () => {
  const res = new Pipe().mul(["10", "-2"]).abs().calc();

  assertEquals(res, "20");
});

Deno.test("pipe.abs", () => {
  const res = new Pipe().mul(["10", "2"]).abs().calc();

  assertEquals(res, "20");
});

Deno.test("pipe.abs", () => {
  const res = new Pipe().mul(["-10", "2"]).abs().calc();

  assertEquals(res, "20");
});

Deno.test("pipe.abs", () => {
  const res = new Pipe().mul(["-10", "-2"]).abs().calc();

  assertEquals(res, "20");
});

Deno.test("pipe.abs", () => {
  const res = new Pipe("-20").abs().calc();

  assertEquals(res, "20");
});

import { assertEquals } from "@std/assert/equals";
import { Pipe } from "../../../index.ts";

Deno.test("5 mod 2", () => {
  const res = new Pipe().add(["4", "1"]).mod("2").calc();

  assertEquals(res, "5");
});

Deno.test("4 mod 3", () => {
  const res = new Pipe().add(["3", "1"]).mod("3").calc();

  assertEquals(res, "33333333333333333333");
});

Deno.test("4 mod 3", () => {
  const res = new Pipe().add(["3", "1"]).mod("3", { precision: 3 }).calc();

  assertEquals(res, "333");
});

Deno.test("4 mod 3", () => {
  const res = new Pipe().add(["3", "1"]).mod("3", { precision: 0 }).calc();

  assertEquals(res, "0");
});

Deno.test("3 mod 4", () => {
  const res = new Pipe().add(["2", "1"]).mod("4").calc();

  assertEquals(res, "75");
});

Deno.test("0.25 mod 2", () => {
  const res = new Pipe().add(["0.2", "0.05"]).mod("2").calc();

  assertEquals(res, "125");
});

Deno.test("0.25 mod 0.2", () => {
  const res = new Pipe().add(["0.2", "0.05"]).mod("0.2").calc();

  assertEquals(res, "25");
});
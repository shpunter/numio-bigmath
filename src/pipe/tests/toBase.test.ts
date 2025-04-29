import { assertEquals } from "@std/assert/equals";
import { Pipe } from "../pipe.ts";

Deno.test("pipe.base, ", () => {
  const res = new Pipe().add(["1", "2", "3"]).resultToBase(2);

  assertEquals(res, "110");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("3").resultToBase(2);

  assertEquals(res, "11");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("3").resultToBase(2);

  assertEquals(res, "11");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("15").resultToBase(16);

  assertEquals(res, "f");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("0xf").add(["1", "0xf"]).resultToBase(10);

  assertEquals(res, "31");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("0xf").add(["1", "0xf"]).resultToBase(16);

  assertEquals(res, "1f");
});

Deno.test("pipe.base", () => {
  const res = new Pipe("-13").resultToBase(16);

  assertEquals(res, "-d");
});

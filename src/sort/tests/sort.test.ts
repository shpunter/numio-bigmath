import { assertEquals } from "jsr:@std/assert";
import { sort } from "../main.ts";
import { ASC, DESC } from "../constants.ts";

Deno.test("sort asc [1, 2, 1, 9, 2]", () => {
  const res = sort(["1", "2", "1", "9", "2"]);
  assertEquals(res, ["1", "1", "2", "2", "9"]);
});

Deno.test("sort desc [1, 2, 1, 9, 2]", () => {
  const res = sort(["1", "2", "1", "9", "2"], DESC);
  assertEquals(res, ["9", "2", "2", "1", "1"]);
});

Deno.test("sort asc [1, 10, 11, 101, 11, 10, 1]", () => {
  const res = sort(["1", "10", "11", "101", "11", "10", "1"], ASC);
  assertEquals(res, ["1", "1", "10", "10", "11", "11", "101"]);
});

Deno.test("sort desc [1, 10, 11, 101, 11, 10, 1]", () => {
  const res = sort(["1", "10", "11", "101", "11", "10", "1"], DESC);
  assertEquals(res, ["101", "11", "11", "10", "10", "1", "1"]);
});
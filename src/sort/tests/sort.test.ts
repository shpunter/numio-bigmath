import { assertEquals } from "jsr:@std/assert";
import { sort } from "../../../index.ts";
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

Deno.test("sort [1.33, 1.33, 1.66, 2.33, 2.66, 0.66]", () => {
  const res = sort(["1.33", "1.33", "1.66", "2.33", "2.66", "0.66"]);
  assertEquals(res, ["0.66", "1.33", "1.33", "1.66", "2.33", "2.66"]);
});

Deno.test("sort [1, 2, 0.3]", () => {
  const res = sort(["1", "2", "0.3"]);
  assertEquals(res, ["0.3", "1", "2"]);
});

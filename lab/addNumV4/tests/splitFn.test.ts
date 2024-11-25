import { assertEquals } from "jsr:@std/assert";
import { splitFn } from "../utils.ts";

Deno.test("123", () => {
    const res = splitFn("123");
    assertEquals(res, [[1, 2, 3], []]);
})

Deno.test("12.3", () => {
    const res = splitFn("12.3");
    assertEquals(res, [[1, 2], [3]]);
})

Deno.test("0.001", () => {
    const res = splitFn("0.001");
    assertEquals(res, [[0], [0, 0, 1]]);
})
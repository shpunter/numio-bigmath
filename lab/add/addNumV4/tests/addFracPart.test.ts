import { assertEquals } from "jsr:@std/assert";
import { addFracPart } from "../utils.ts";

Deno.test("0.1 + 0.2", () => {
    const sum = addFracPart([1], [2]);
    assertEquals(sum, [[3], 0]);
});

Deno.test("0.1001 + 0.9", () => {
    const sum = addFracPart([1, 0, 0, 1], [9]);
    assertEquals(sum, [[0, 0, 0, 1], 1]);
});

Deno.test("0.11 + 0.99", () => {
    const sum = addFracPart([1, 1], [9, 9]);
    assertEquals(sum, [[1, 0], 1]);
});

Deno.test("0.01 + 0.99", () => {
    const sum = addFracPart([0, 1], [9, 9]);
    assertEquals(sum, [[0, 0], 1]);
});

Deno.test("0.1 + 0.99", () => {
    const sum = addFracPart([1], [9, 9]);
    assertEquals(sum, [[0, 9], 1]);
});

Deno.test("0.11 + 0.9", () => {
    const sum = addFracPart([1, 1], [9]);
    assertEquals(sum, [[0, 1], 1]);
});
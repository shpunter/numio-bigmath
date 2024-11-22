import { assertEquals } from "jsr:@std/assert";
import { getSum } from "../index.ts";

Deno.test("1 + 9", () => {
    const result = getSum(1, 9);
    assertEquals(result, 0);
});

Deno.test("2 + 9", () => {
    const result = getSum(2, 9);
    assertEquals(result, 1);
});

Deno.test("2 + 8", () => {
    const result = getSum(2, 8);
    assertEquals(result, 0);
});

Deno.test("3 + 9", () => {
    const result = getSum(3, 9);
    assertEquals(result, 2);
});

Deno.test("3 + 8", () => {
    const result = getSum(3, 8);
    assertEquals(result, 1);
});

Deno.test("3 + 7", () => {
    const result = getSum(3, 7);
    assertEquals(result, 0);
});

Deno.test("9 + 9", () => {
    const result = getSum(9, 9);
    assertEquals(result, 8);
});

Deno.test("9 + 8", () => {
    const result = getSum(9, 8);
    assertEquals(result, 7);
});

Deno.test("9 + 3", () => {
    const result = getSum(9, 3);
    assertEquals(result, 2);
});

Deno.test("9 + 2", () => {
    const result = getSum(9, 2);
    assertEquals(result, 1);
});

Deno.test("9 + 1", () => {
    const result = getSum(9, 1);
    assertEquals(result, 0);
});
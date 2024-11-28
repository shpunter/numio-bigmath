import { assertEquals } from "jsr:@std/assert";
import { subIntPart } from "../utils.ts";

Deno.test("2 - 1", () => {
    const sub = subIntPart([2], [1]);
    assertEquals(sub, [1]);
})

Deno.test("10 - 1", () => {
    const sub = subIntPart([1, 0], [1]);
    assertEquals(sub, [0, 9]);
})

Deno.test("99 - 99", () => {
    const sub = subIntPart([9, 9], [9, 9]);
    assertEquals(sub, [0, 0]);
})

Deno.test("199 - 99", () => {
    const sub = subIntPart([1, 9, 9], [9, 9]);
    assertEquals(sub, [1, 0, 0]);
})

Deno.test("99 - 199", () => {
    const sub = subIntPart([9, 9], [1, 9, 9]);
    assertEquals(sub, [1, 0, 0]);
})

Deno.test("111 - 99", () => {
    const sub = subIntPart([1, 1, 1], [9, 9]);
    assertEquals(sub, [0, 1, 2]);
})

Deno.test("191 - 99", () => {
    const sub = subIntPart([1, 9, 1], [9, 9]);
    assertEquals(sub, [0, 9, 2]);
})

Deno.test("99 - 191", () => {
    const sub = subIntPart([9, 9], [1, 9, 1]);
    assertEquals(sub, [0, 9, 2]);
})

Deno.test("111 - 999", () => {
    const sub = subIntPart([1, 1, 1], [9, 9, 9]);
    assertEquals(sub, [8, 8, 8]);
})

Deno.test("1111 - 999", () => {
    const sub = subIntPart([1, 1, 1, 1], [9, 9, 9]);
    assertEquals(sub, [0, 1, 1, 2]);
})

Deno.test("5555 - 627", () => {
    const sub = subIntPart([5, 5, 5, 5], [6, 2, 7]);
    assertEquals(sub, [4, 9, 2, 8]);
})

Deno.test("1001 - 9", () => {
    const sub = subIntPart([1, 0, 0, 1], [9]);
    assertEquals(sub, [0, 9, 9, 2]);
})

Deno.test("1000 - 1", () => {
    const sub = subIntPart([1, 0, 0, 0], [1]);
    assertEquals(sub, [0, 9, 9, 9]);
})
Deno.test("1010 - 101", () => {
    const sub = subIntPart([1, 0, 1, 0], [1, 0, 1]);
    assertEquals(sub, [0, 9, 0, 9]);
})
import { assert } from "jsr:@std/assert";
import { addNum } from "../index.ts";

Deno.test("1 + 2", () => {
    const sum = addNum("1", "2");
    assert(sum, "3");
});

Deno.test("0.1 + 0.2", () => {
    const sum = addNum("0.1", "0.2");
    assert(sum, "0.3");
});

Deno.test("0.01 + 0.09", () => {
    const sum = addNum("0.01", "0.09");
    assert(sum, "0.10");
});

Deno.test("0.1 + 0.9", () => {
    const sum = addNum("0.1", "0.9");
    assert(sum, "1.0");
});

Deno.test("1.1 + 9.9", () => {
    const sum = addNum("1.1", "9.9");
    assert(sum, "10.0");
});

Deno.test("1.0001 + 9.9", () => {
    const sum = addNum("1.0001", "9.9");
    assert(sum, "10.9001");
});

Deno.test("0.91 + 0.19", () => {
    const sum = addNum("0.91", "0.19");
    assert(sum, "1.10");
});

Deno.test("0.91 + 0.09", () => {
    const sum = addNum("0.91", "0.09");
    assert(sum, "1.00");
});

Deno.test("0.81 + 0.19", () => {
    const sum = addNum("0.81", "0.19");
    assert(sum, "0.90");
});

Deno.test("1 + 0.19", () => {
    const sum = addNum("1", "0.19");
    assert(sum, "1.19");
});

Deno.test("10 + 0.19", () => {
    const sum = addNum("10", "0.19");
    assert(sum, "10.19");
});
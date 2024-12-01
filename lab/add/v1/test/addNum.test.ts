import { assertEquals } from "jsr:@std/assert";
import { addV1 } from "../index.ts";

Deno.test("1 + 2", () => {
    const sum = addV1("1", "2");
    assertEquals(sum, "3");
});

Deno.test("0.1 + 0.2", () => {
    const sum = addV1("0.1", "0.2");
    assertEquals(sum, "0.3");
});

Deno.test("0.01 + 0.09", () => {
    const sum = addV1("0.01", "0.09");
    assertEquals(sum, "0.10");
});

Deno.test("0.1 + 0.9", () => {
    const sum = addV1("0.1", "0.9");
    assertEquals(sum, "1.0");
});

Deno.test("1.1 + 9.9", () => {
    const sum = addV1("1.1", "9.9");
    assertEquals(sum, "11.0");
});

Deno.test("1.0001 + 9.9", () => {
    const sum = addV1("1.0001", "9.9");
    assertEquals(sum, "10.9001");
});

Deno.test("0.91 + 0.19", () => {
    const sum = addV1("0.91", "0.19");
    assertEquals(sum, "1.10");
});

Deno.test("0.91 + 0.09", () => {
    const sum = addV1("0.91", "0.09");
    assertEquals(sum, "1.00");
});

Deno.test("0.81 + 0.19", () => {
    const sum = addV1("0.81", "0.19");
    assertEquals(sum, "1.00");
});

Deno.test("1 + 0.19", () => {
    const sum = addV1("1", "0.19");
    assertEquals(sum, "1.19");
});

Deno.test("10 + 0.19", () => {
    const sum = addV1("10", "0.19");
    assertEquals(sum, "10.19");
});

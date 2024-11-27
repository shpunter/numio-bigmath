import { assertEquals } from "jsr:@std/assert";
import { addFractionPart } from "../utils.ts";

Deno.test("1 + 1", () => {
    const sum = addFractionPart("1", "1");
    assertEquals(sum, ["2", ""]);
});

Deno.test("1 + 10", () => {
    const sum = addFractionPart("1", "10");
    assertEquals(sum, ["20", ""]);
});

Deno.test("10 + 1", () => {
    const sum = addFractionPart("10", "1");
    assertEquals(sum, ["20", ""]);
});

Deno.test("10001 + 1", () => {
    const sum = addFractionPart("10001", "1");
    assertEquals(sum, ["20001", ""]);
});

Deno.test("9 + 1", () => {
    const sum = addFractionPart("9", "1");
    assertEquals(sum, ["0", "1"]);
});

Deno.test("9 + 100", () => {
    const sum = addFractionPart("9", "100");
    assertEquals(sum, ["000", "1"]);
});

Deno.test("999 + 100", () => {
    const sum = addFractionPart("999", "100");
    assertEquals(sum, ["099", "1"]);
});

Deno.test("999 + 1000", () => {
    const sum = addFractionPart("999", "1000");
    assertEquals(sum, ["0990", "1"]);
});

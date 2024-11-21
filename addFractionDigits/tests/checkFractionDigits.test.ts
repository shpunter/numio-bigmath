import { assertEquals } from "jsr:@std/assert";
import { checkFractionLength } from "../index.ts";

Deno.test("12 & 23", () => {
    const sum = checkFractionLength("12", "23");
    assertEquals(sum, ["23", "12"]);
});

Deno.test("121 & 23", () => {
    const sum = checkFractionLength("121", "23");
    assertEquals(sum, ["230", "121"]);
});

Deno.test("12 & 231", () => {
    const sum = checkFractionLength("12", "231");
    assertEquals(sum, ["120", "231"]);
});

Deno.test("1 & 99999", () => {
    const sum = checkFractionLength("1", "99999");
    assertEquals(sum, ["10000", "99999"]);
});

Deno.test("10 & 100", () => {
    const sum = checkFractionLength("10", "100");
    assertEquals(sum, ["100", "100"]);
});

Deno.test("100 & 10", () => {
    const sum = checkFractionLength("100", "10");
    assertEquals(sum, ["100", "100"]);
});

Deno.test("1234 & 00", () => {
    const sum = checkFractionLength("1234", "00");
    assertEquals(sum, ["0000", "1234"]);
});

Deno.test("0 & 00", () => {
    const sum = checkFractionLength("0", "00");
    assertEquals(sum, ["00", "00"]);
});

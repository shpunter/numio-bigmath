import { assertEquals } from "jsr:@std/assert";
import { mulV1 } from "../index.ts";

Deno.test("2 * 5", () => {
    const res = mulV1("2", "5");
    assertEquals(res, "10");
})

Deno.test("1 * 5", () => {
    const res = mulV1("1", "5");
    assertEquals(res, "5");
})

Deno.test("0 * 5", () => {
    const res = mulV1("0", "5");
    assertEquals(res, "0");
})

Deno.test("23 * 5", () => {
    const res = mulV1("23", "5");
    assertEquals(res, "115");
})


Deno.test("5 * 23", () => {
    const res = mulV1("5", "23");
    assertEquals(res, "115");
})

Deno.test("99 * 5", () => {
    const res = mulV1("99", "5");
    assertEquals(res, "495");
})

Deno.test("2604 * 1812", () => {
    const res = mulV1("2604", "1812");
    assertEquals(res, "4718448");
})

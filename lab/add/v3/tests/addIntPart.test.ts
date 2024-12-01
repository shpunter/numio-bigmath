import { assertEquals } from "jsr:@std/assert";
import { addV3 } from "../index.ts";

Deno.test("12 + 21", () => {
    const sum = addV3("12", "21");
    assertEquals(sum, "33");
})

Deno.test("12 + 28", () => {
    const sum = addV3("12", "28");
    assertEquals(sum, "40");
})

Deno.test("19 + 29", () => {
    const sum = addV3("19", "29");
    assertEquals(sum, "48");
})

Deno.test("189 + 29", () => {
    const sum = addV3("189", "29");
    assertEquals(sum, "218");
})

Deno.test("1589 + 529", () => {
    const sum = addV3("1589", "529");
    assertEquals(sum, "2118");
})

Deno.test("529 + 1589", () => {
    const sum = addV3("529", "1589");
    assertEquals(sum, "2118");
})

Deno.test("589 + 529", () => {
    const sum = addV3("589", "529");
    assertEquals(sum, "1118");
})

Deno.test("1000 + 1", () => {
    const sum = addV3("1000", "1");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 1", () => {
    const sum = addV3("1001", "1");
    assertEquals(sum, "1002");
})

Deno.test("1001 + 0", () => {
    const sum = addV3("1001", "0");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 10", () => {
    const sum = addV3("1001", "10");
    assertEquals(sum, "1011");
})

Deno.test("1001 + 9", () => {
    const sum = addV3("1001", "9");
    assertEquals(sum, "1010");
})

Deno.test("1001 + 9000", () => {
    const sum = addV3("1001", "9000");
    assertEquals(sum, "10001");
})

Deno.test("1001 + 9009", () => {
    const sum = addV3("1001", "9009");
    assertEquals(sum, "10010");
})

Deno.test("1001 + 9999", () => {
    const sum = addV3("1001", "9999");
    assertEquals(sum, "11000");
})

Deno.test("1111 + 9999", () => {
    const sum = addV3("1111", "9999");
    assertEquals(sum, "11110");
})
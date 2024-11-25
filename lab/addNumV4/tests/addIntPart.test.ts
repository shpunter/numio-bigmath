import { assertEquals } from "jsr:@std/assert";
import { addNumV4 } from "../index.ts";

Deno.test("12 + 21", () => {
    const sum = addNumV4("12", "21");
    assertEquals(sum, "33");
})

Deno.test("12 + 28", () => {
    const sum = addNumV4("12", "28");
    assertEquals(sum, "40");
})

Deno.test("19 + 29", () => {
    const sum = addNumV4("19", "29");
    assertEquals(sum, "48");
})

Deno.test("189 + 29", () => {
    const sum = addNumV4("189", "29");
    assertEquals(sum, "218");
})

Deno.test("1589 + 529", () => {
    const sum = addNumV4("1589", "529");
    assertEquals(sum, "2118");
})

Deno.test("529 + 1589", () => {
    const sum = addNumV4("529", "1589");
    assertEquals(sum, "2118");
})

Deno.test("589 + 529", () => {
    const sum = addNumV4("589", "529");
    assertEquals(sum, "1118");
})

Deno.test("1000 + 1", () => {
    const sum = addNumV4("1000", "1");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 1", () => {
    const sum = addNumV4("1001", "1");
    assertEquals(sum, "1002");
})

Deno.test("1001 + 0", () => {
    const sum = addNumV4("1001", "0");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 10", () => {
    const sum = addNumV4("1001", "10");
    assertEquals(sum, "1011");
})

Deno.test("1001 + 9", () => {
    const sum = addNumV4("1001", "9");
    assertEquals(sum, "1010");
})

Deno.test("1001 + 9000", () => {
    const sum = addNumV4("1001", "9000");
    assertEquals(sum, "10001");
})

Deno.test("1001 + 9009", () => {
    const sum = addNumV4("1001", "9009");
    assertEquals(sum, "10010");
})

Deno.test("1001 + 9999", () => {
    const sum = addNumV4("1001", "9999");
    assertEquals(sum, "11000");
})

Deno.test("1111 + 9999", () => {
    const sum = addNumV4("1111", "9999");
    assertEquals(sum, "11110");
})


Deno.test("9 + 1", () => {
    const sum = addNumV4("9", "1");
    assertEquals(sum, "10");
})

Deno.test("99 + 1", () => {
    const sum = addNumV4("99", "1");
    assertEquals(sum, "100");
})

Deno.test("999 + 1", () => {
    const sum = addNumV4("999", "1");
    assertEquals(sum, "1000");
})

Deno.test("9 + 11", () => {
    const sum = addNumV4("9", "11");
    assertEquals(sum, "20");
})

Deno.test("9 + 111", () => {
    const sum = addNumV4("9", "111");
    assertEquals(sum, "120");
})

Deno.test("9 + 100", () => {
    const sum = addNumV4("9", "100");
    assertEquals(sum, "109");
})

Deno.test("9 + 101", () => {
    const sum = addNumV4("9", "101");
    assertEquals(sum, "110");
})
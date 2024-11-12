import { add } from "../index.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("add 2 num as string", () => {
    const sum = add("12", "21");
    assertEquals(sum, "33");
})

Deno.test("sum === 10", () => {
    const sum = add("12", "28");
    assertEquals(sum, "40");
})

Deno.test("sum > 10", () => {
    const sum = add("19", "29");
    assertEquals(sum, "48");
})

Deno.test("2 sums > 10 test 1", () => {
    const sum = add("189", "29");
    assertEquals(sum, "218");
})

Deno.test("2 sums > 10 test 2", () => {
    const sum = add("1589", "529");
    assertEquals(sum, "2118");
})

Deno.test("2 sums > 10 test 3", () => {
    const sum = add("529", "1589");
    assertEquals(sum, "2118");
})

Deno.test("all sums > 10", () => {
    const sum = add("589", "529");
    assertEquals(sum, "1118");
})

Deno.test("1000 + 1", () => {
    const sum = add("1000", "1");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 1", () => {
    const sum = add("1001", "1");
    assertEquals(sum, "1002");
})

Deno.test("1001 + 0", () => {
    const sum = add("1001", "0");
    assertEquals(sum, "1001");
})

Deno.test("1001 + 10", () => {
    const sum = add("1001", "10");
    assertEquals(sum, "1011");
})

Deno.test("1001 + 9", () => {
    const sum = add("1001", "9");
    assertEquals(sum, "1010");
})

Deno.test("1001 + 9000", () => {
    const sum = add("1001", "9000");
    assertEquals(sum, "10001");
})

Deno.test("1001 + 9009", () => {
    const sum = add("1001", "9009");
    assertEquals(sum, "10010");
})

Deno.test("1001 + 9999", () => {
    const sum = add("1001", "9999");
    assertEquals(sum, "11000");
})

Deno.test("1111 + 9999", () => {
    const sum = add("1111", "9999");
    assertEquals(sum, "11110");
})
import { addIntegerDigits } from "../index.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("addIntegerDigitsIntegerDigits 2 num as string", () => {
    const sum = addIntegerDigits("12", "21");
    assertEquals(sum, ["33", 0]);
})

Deno.test("sum === 10", () => {
    const sum = addIntegerDigits("12", "28");
    assertEquals(sum, ["40", 0]);
})

Deno.test("sum > 10", () => {
    const sum = addIntegerDigits("19", "29");
    assertEquals(sum, ["48", 0]);
})

Deno.test("2 sums > 10 test 1", () => {
    const sum = addIntegerDigits("189", "29");
    assertEquals(sum, ["218", 0]);
})

Deno.test("2 sums > 10 test 2", () => {
    const sum = addIntegerDigits("1589", "529");
    assertEquals(sum, ["2118", 0]);
})

Deno.test("2 sums > 10 test 3", () => {
    const sum = addIntegerDigits("529", "1589");
    assertEquals(sum, ["2118", 0]);
})

Deno.test("all sums > 10", () => {
    const sum = addIntegerDigits("589", "529");
    assertEquals(sum, ["118", 1]);
})

Deno.test("1000 + 1", () => {
    const sum = addIntegerDigits("1000", "1");
    assertEquals(sum, ["1001", 0]);
})

Deno.test("1001 + 1", () => {
    const sum = addIntegerDigits("1001", "1");
    assertEquals(sum, ["1002", 0]);
})

Deno.test("1001 + 0", () => {
    const sum = addIntegerDigits("1001", "0");
    assertEquals(sum, ["1001", 0]);
})

Deno.test("1001 + 10", () => {
    const sum = addIntegerDigits("1001", "10");
    assertEquals(sum, ["1011", 0]);
})

Deno.test("1001 + 9", () => {
    const sum = addIntegerDigits("1001", "9");
    assertEquals(sum, ["1010", 0]);
})

Deno.test("1001 + 9000", () => {
    const sum = addIntegerDigits("1001", "9000");
    assertEquals(sum, ["0001", 1]);
})

Deno.test("1001 + 9009", () => {
    const sum = addIntegerDigits("1001", "9009");
    assertEquals(sum, ["0010", 1]);
})

Deno.test("1001 + 9999", () => {
    const sum = addIntegerDigits("1001", "9999");
    assertEquals(sum, ["1000", 1]);
})

Deno.test("1111 + 9999", () => {
    const sum = addIntegerDigits("1111", "9999");
    assertEquals(sum, ["1110", 1]);
})
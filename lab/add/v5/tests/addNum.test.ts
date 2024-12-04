import { assertEquals } from "jsr:@std/assert";
import { addV5 } from "../index.ts";

Deno.test("12 + 21", () => {
    const sum = addV5("12", "21");
    assertEquals(sum, "33");
});

Deno.test("12 + 28", () => {
    const sum = addV5("12", "28");
    assertEquals(sum, "40");
});

Deno.test("19 + 29", () => {
    const sum = addV5("19", "29");
    assertEquals(sum, "48");
});

Deno.test("189 + 29", () => {
    const sum = addV5("189", "29");
    assertEquals(sum, "218");
});

Deno.test("1589 + 529", () => {
    const sum = addV5("1589", "529");
    assertEquals(sum, "2118");
});

Deno.test("529 + 1589", () => {
    const sum = addV5("529", "1589");
    assertEquals(sum, "2118");
});

Deno.test("589 + 529", () => {
    const sum = addV5("589", "529");
    assertEquals(sum, "1118");
});

Deno.test("1000 + 1", () => {
    const sum = addV5("1000", "1");
    assertEquals(sum, "1001");
});

Deno.test("1001 + 1", () => {
    const sum = addV5("1001", "1");
    assertEquals(sum, "1002");
});

Deno.test("1001 + 0", () => {
    const sum = addV5("1001", "0");
    assertEquals(sum, "1001");
});

Deno.test("1001 + 10", () => {
    const sum = addV5("1001", "10");
    assertEquals(sum, "1011");
});

Deno.test("1001 + 9", () => {
    const sum = addV5("1001", "9");
    assertEquals(sum, "1010");
});

Deno.test("1001 + 9000", () => {
    const sum = addV5("1001", "9000");
    assertEquals(sum, "10001");
});

Deno.test("1001 + 9009", () => {
    const sum = addV5("1001", "9009");
    assertEquals(sum, "10010");
});

Deno.test("1001 + 9999", () => {
    const sum = addV5("1001", "9999");
    assertEquals(sum, "11000");
});

Deno.test("1111 + 9999", () => {
    const sum = addV5("1111", "9999");
    assertEquals(sum, "11110");
});

Deno.test("9 + 1", () => {
    const sum = addV5("9", "1");
    assertEquals(sum, "10");
});

Deno.test("99 + 1", () => {
    const sum = addV5("99", "1");
    assertEquals(sum, "100");
});

Deno.test("999 + 1", () => {
    const sum = addV5("999", "1");
    assertEquals(sum, "1000");
});

Deno.test("9 + 11", () => {
    const sum = addV5("9", "11");
    assertEquals(sum, "20");
});

Deno.test("9 + 111", () => {
    const sum = addV5("9", "111");
    assertEquals(sum, "120");
});

Deno.test("9 + 100", () => {
    const sum = addV5("9", "100");
    assertEquals(sum, "109");
});

Deno.test("9 + 101", () => {
    const sum = addV5("9", "101");
    assertEquals(sum, "110");
});

Deno.test("0.001 + 0.101", () => {
    const sum = addV5("0.001", "0.101");
    assertEquals(sum, "0.102");
});

Deno.test("0.1 + 0.9", () => {
    const sum = addV5("0.1", "0.9");
    assertEquals(sum, "1");
});

Deno.test("0.10101 + 0.01010", () => {
    const sum = addV5("0.10101", "0.01010");
    assertEquals(sum, "0.11111");
});

Deno.test("1.11 + 9.99", () => {
    const sum = addV5("1.11", "9.99");
    assertEquals(sum, "11.1");
});

Deno.test("1.0011 + 9.99", () => {
    const sum = addV5("1.0011", "9.99");
    assertEquals(sum, "10.9911");
});

Deno.test("0.1 + 0.2", () => {
    const sum = addV5("0.1", "0.2");
    assertEquals(sum, "0.3");
});

Deno.test("0.111111111111111111111111111111111111111111111111111111111111111111111111111 + 0.9", () => {
    const sum = addV5(
        "0.111111111111111111111111111111111111111111111111111111111111111111111111111",
        "0.9",
    );
    assertEquals(
        sum,
        "1.011111111111111111111111111111111111111111111111111111111111111111111111111",
    );
});

Deno.test("0.9 + 0.111111111111111111111111111111111111111111111111111111111111111111111111111 + 0.9", () => {
    const sum = addV5(
        "0.9",
        "0.111111111111111111111111111111111111111111111111111111111111111111111111111",
    );
    assertEquals(
        sum,
        "1.011111111111111111111111111111111111111111111111111111111111111111111111111",
    );
});

Deno.test("999.9 + 0.111", () => {
    const sum = addV5("999.9", "0.111");
    assertEquals(sum, "1000.011");
});

Deno.test("101.001 + 0.00001", () => {
    const sum = addV5("101.001", "0.00001");
    assertEquals(sum, "101.00101");
});

Deno.test("11.1 + 0.001", () => {
    const sum = addV5("11.1", "0.001");
    assertEquals(sum, "11.101");
});

Deno.test("0.001 + 11.1", () => {
    const sum = addV5("0.001", "11.1");
    assertEquals(sum, "11.101");
});

Deno.test("110.001 + 11.1", () => {
    const sum = addV5("110.001", "11.1");
    assertEquals(sum, "121.101");
});

Deno.test("9 + 1.1", () => {
    const sum = addV5("9", "1.1");
    assertEquals(sum, "10.1");
});

Deno.test("19 + 1", () => {
    const sum = addV5("19", "1");
    assertEquals(sum, "20");
});

Deno.test("1.9 + 0.1", () => {
    const sum = addV5("1.9", "0.1");
    assertEquals(sum, "2");
});



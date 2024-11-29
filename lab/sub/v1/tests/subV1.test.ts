import { assertEquals } from "jsr:@std/assert";
import { subV1 } from "../index.ts";

Deno.test("1001 - 9", () => {
    const sub = subV1("1001", "9");
    assertEquals(sub, "0992");
});

Deno.test("0.9 - 0.1", () => {
    const sub = subV1("0.9", "0.1");
    assertEquals(sub, "0.8");
});

Deno.test("12 - 21", () => {
    const sub = subV1("12", "21");
    assertEquals(sub, "09");
});

Deno.test("20 - 12", () => {
    const sub = subV1("28", "12");
    assertEquals(sub, "16");
});

Deno.test("29 - 19", () => {
    const sub = subV1("29", "19");
    assertEquals(sub, "10");
});


Deno.test("189 - 29", () => {
    const sub = subV1("189", "29");
    assertEquals(sub, "160");
});

Deno.test("1589 - 529", () => {
    const sub = subV1("1589", "529");
    assertEquals(sub, "1060");
});

Deno.test("529 - 1589", () => {
    const sub = subV1("529", "1589");
    assertEquals(sub, "1060");
});

Deno.test("621 - 529", () => {
    const sub = subV1("621", "529");
    assertEquals(sub, "092");
});

Deno.test("1000 - 1", () => {
    const sub = subV1("1000", "1");
    assertEquals(sub, "0999");
});

Deno.test("1001 - 1", () => {
    const sub = subV1("1001", "1");
    assertEquals(sub, "1000");
});


Deno.test("1001 - 0", () => {
    const sub = subV1("1001", "0");
    assertEquals(sub, "1001");
});

Deno.test("1001 - 10", () => {
    const sub = subV1("1001", "10");
    assertEquals(sub, "0991");
});

Deno.test("1001 - 9", () => {
    const sub = subV1("1001", "9");
    assertEquals(sub, "0992");
});

Deno.test("1001 - 9000", () => {
    const sub = subV1("1001", "9000");
    assertEquals(sub, "7999");
});

Deno.test("1001 - 9009", () => {
    const sub = subV1("1001", "9009");
    assertEquals(sub, "8008");
});

Deno.test("1001 - 9999", () => {
    const sub = subV1("1001", "9999");
    assertEquals(sub, "8998");
});

Deno.test("1111 - 999", () => {
    const sub = subV1("1111", "999");
    assertEquals(sub, "0112");
});

Deno.test("1101 - 999", () => {
    const sub = subV1("1101", "999");
    assertEquals(sub, "0102");
});

Deno.test("1011 - 909", () => {
    const sub = subV1("1011", "909");
    assertEquals(sub, "0102");
});

Deno.test("1011 - 111", () => {
    const sub = subV1("1011", "111");
    assertEquals(sub, "0900");
});

Deno.test("1011 - 101", () => {
    const sub = subV1("1011", "101");
    assertEquals(sub, "0910");
});
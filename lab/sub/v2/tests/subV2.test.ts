import { assertEquals } from "jsr:@std/assert";
import { subV2 } from "../index.ts";
Deno.test("1001 - 9", () => {
    const sub = subV2("1001", "9");
    assertEquals(sub, "992");
});

Deno.test("0.9 - 0.1", () => {
    const sub = subV2("0.9", "0.1");
    assertEquals(sub, "0.8");
});

Deno.test("12 - 21", () => {
    const sub = subV2("12", "21");
    assertEquals(sub, "-9");
});

Deno.test("20 - 12", () => {
    const sub = subV2("28", "12");
    assertEquals(sub, "16");
});

Deno.test("29 - 19", () => {
    const sub = subV2("29", "19");
    assertEquals(sub, "10");
});


Deno.test("189 - 29", () => {
    const sub = subV2("189", "29");
    assertEquals(sub, "160");
});

Deno.test("1589 - 529", () => {
    const sub = subV2("1589", "529");
    assertEquals(sub, "1060");
});

Deno.test("529 - 1589", () => {
    const sub = subV2("529", "1589");
    assertEquals(sub, "1060");
});

Deno.test("621 - 529", () => {
    const sub = subV2("621", "529");
    assertEquals(sub, "92");
});

Deno.test("1000 - 1", () => {
    const sub = subV2("1000", "1");
    assertEquals(sub, "999");
});

Deno.test("1001 - 1", () => {
    const sub = subV2("1001", "1");
    assertEquals(sub, "1000");
});


Deno.test("1001 - 0", () => {
    const sub = subV2("1001", "0");
    assertEquals(sub, "1001");
});

Deno.test("1001 - 10", () => {
    const sub = subV2("1001", "10");
    assertEquals(sub, "991");
});

Deno.test("1001 - 9", () => {
    const sub = subV2("1001", "9");
    assertEquals(sub, "992");
});

Deno.test("1001 - 9000", () => {
    const sub = subV2("1001", "9000");
    assertEquals(sub, "-7999");
});

Deno.test("1001 - 9009", () => {
    const sub = subV2("1001", "9009");
    assertEquals(sub, "-8008");
});

Deno.test("1001 - 9999", () => {
    const sub = subV2("1001", "9999");
    assertEquals(sub, "-8998");
});

Deno.test("1111 - 999", () => {
    const sub = subV2("1111", "999");
    assertEquals(sub, "112");
});

Deno.test("1101 - 999", () => {
    const sub = subV2("1101", "999");
    assertEquals(sub, "102");
});

Deno.test("1011 - 909", () => {
    const sub = subV2("1011", "909");
    assertEquals(sub, "102");
});

Deno.test("1011 - 111", () => {
    const sub = subV2("1011", "111");
    assertEquals(sub, "900");
});

Deno.test("1011 - 101", () => {
    const sub = subV2("1011", "101");
    assertEquals(sub, "910");
});

Deno.test("222.22 - 11.111", () => {
    const sub = subV2("222.22", "11.111");
    assertEquals(sub, "211.109");
});

Deno.test("1.11 - 0.999", () => {
    const sub = subV2("1.11", "0.999");
    assertEquals(sub, "0.111");
});

Deno.test("10.01 - 0.1", () => {
    const sub = subV2("10.01", "0.1");
    assertEquals(sub, "9.91");
});

Deno.test("10.01 - 0.12", () => {
    const sub = subV2("10.01", "0.12");
    assertEquals(sub, "9.89");
});

Deno.test("10 - 0.12", () => {
    const sub = subV2("10", "0.12");
    assertEquals(sub, "9.88");
});

Deno.test("10.12 - 1", () => {
    const sub = subV2("10.12", "1");
    assertEquals(sub, "9.12");
});

Deno.test("1.12 - 0.12", () => {
    const sub = subV2("1.12", "0.12");
    assertEquals(sub, "1");
});

Deno.test("0.12 - 1.12", () => {
    const sub = subV2("0.12", "1.12");
    assertEquals(sub, "-1");
});

Deno.test("111 - 11", () => {
    const sub = subV2("111", "11");
    assertEquals(sub, "100");
});
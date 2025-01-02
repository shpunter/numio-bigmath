import { assertEquals } from "jsr:@std/assert";
import { div } from "../index.ts";

Deno.test("15 / 3", () => {
  assertEquals(div("15", "3"), "5");
});

Deno.test("15 / 1", () => {
  assertEquals(div("15", "1"), "15");
});

Deno.test("5 / 1", () => {
  assertEquals(div("5", "1"), "5");
});

Deno.test("0 / 1", () => {
  assertEquals(div("0", "1"), "0");
});

Deno.test("1 / 1", () => {
  assertEquals(div("1", "1"), "1");
});

Deno.test("999 / 3", () => {
  assertEquals(div("999", "3"), "333");
});

Deno.test("9999 / 33", () => {
  assertEquals(div("9999", "33"), "303");
});

Deno.test("9999 / 333", () => {
  assertEquals(div("9999", "333"), "30");
});

Deno.test("9999 / 3333", () => {
  assertEquals(div("9999", "3333"), "3");
});

Deno.test("225 / 15", () => {
  assertEquals(div("225", "15"), "15");
});

Deno.test("2080 / 65", () => {
  assertEquals(div("2080", "65"), "32");
});

Deno.test("3 / 2", () => {
  assertEquals(div("3", "2"), "1.5");
});

Deno.test("5 / 4", () => {
  assertEquals(div("5", "4"), "1.25");
});

Deno.test("10 / 3", () => {
  assertEquals(div("10", "3"), "3.33333333333333333333");
});

Deno.test("10 / 3, limit 5", () => {
  assertEquals(div("10", "3", 5), "3.33333");
});


Deno.test("1 / 2", () => {
  assertEquals(div("1", "2"), "0.5");
});

Deno.test("1 / 10", () => {
  assertEquals(div("1", "10"), "0.1");
});

Deno.test("1 / 100", () => {
  assertEquals(div("1", "100"), "0.01");
});

Deno.test("10 / 100", () => {
  assertEquals(div("10", "100"), "0.1");
});

Deno.test("10 / 1000", () => {
  assertEquals(div("10", "1000"), "0.01");
});

Deno.test("11 / 10", () => {
  assertEquals(div("11", "10"), "1.1");
});

Deno.test("10 / 11", () => {
  assertEquals(div("10", "11"), "0.9090909090909090909");
});

Deno.test("1 / 222", () => {
  assertEquals(div("1", "222"), "0.0045045045045045045");
});

Deno.test("1 / 222", () => {
  assertEquals(div("1", "222", 2), "0");
});

Deno.test("0.4 / 2", () => {
  assertEquals(div("0.4", "2"), "0.2");
});

Deno.test("0.04 / 2", () => {
  assertEquals(div("0.04", "2"), "0.02");
});

Deno.test("0.004 / 2", () => {
  assertEquals(div("0.004", "2"), "0.002");
});

Deno.test("0.004 / 0.2", () => {
  assertEquals(div("0.004", "0.2"), "0.02");
});

Deno.test("0.004 / 0.02", () => {
  assertEquals(div("0.004", "0.02"), "0.2");
});

Deno.test("0.004 / 0.002", () => {
  assertEquals(div("0.004", "0.002"), "2");
});

Deno.test("0.04 / 0.002", () => {
  assertEquals(div("0.04", "0.002"), "20");
});

Deno.test("0.4 / 0.002", () => {
  assertEquals(div("0.4", "0.002"), "200");
});

Deno.test("4 / 0.002", () => {
  assertEquals(div("4", "0.002"), "2000");
});

Deno.test("0.02 / 1", () => {
  assertEquals(div("0.02", "1"), "0.02");
});

Deno.test("0.02 / 0.1", () => {
  assertEquals(div("0.02", "0.1"), "0.2");
});

Deno.test("0.1 / 0.02", () => {
  assertEquals(div("0.1", "0.02"), "5");
});

Deno.test("0.1 / 1", () => {
  assertEquals(div("0.1", "1"), "0.1");
});



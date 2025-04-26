import { assertEquals } from "jsr:@std/assert";
import { sub } from "../main.ts";

Deno.test("-1001 - 9", () => {
  const result = sub(["-1001", "9"]);
  assertEquals(result, "-1010");
});

Deno.test("-0.9 - 0.1", () => {
  const result = sub(["-0.9", "0.1"]);
  assertEquals(result, "-1");
});

Deno.test("-12 - 21", () => {
  const result = sub(["-12", "21"]);
  assertEquals(result, "-33");
});

Deno.test("-20 - 12", () => {
  const result = sub(["-20", "12"]);
  assertEquals(result, "-32");
});

Deno.test("-29 - 19", () => {
  const result = sub(["-29", "19"]);
  assertEquals(result, "-48");
});

Deno.test("-189 - 29", () => {
  const result = sub(["-189", "29"]);
  assertEquals(result, "-218");
});

Deno.test("-1589 - 529", () => {
  const result = sub(["-1589", "529"]);
  assertEquals(result, "-2118");
});

Deno.test("-529 - 1589", () => {
  const result = sub(["-529", "1589"]);
  assertEquals(result, "-2118");
});

Deno.test("-621 - 529", () => {
  const result = sub(["-621", "529"]);
  assertEquals(result, "-1150");
});

Deno.test("-1000 - 1", () => {
  const result = sub(["-1000", "1"]);
  assertEquals(result, "-1001");
});

Deno.test("-1 - 1000", () => {
  const result = sub(["-1", "1000"]);
  assertEquals(result, "-1001");
});

Deno.test("-1001 - 1", () => {
  const result = sub(["-1001", "1"]);
  assertEquals(result, "-1002");
});

Deno.test("-1001 - 0", () => {
  const result = sub(["-1001", "0"]);
  assertEquals(result, "-1001");
});

Deno.test("-1001 - 10", () => {
  const result = sub(["-1001", "10"]);
  assertEquals(result, "-1011");
});

Deno.test("-1001 - 9", () => {
  const result = sub(["-1001", "9"]);
  assertEquals(result, "-1010");
});

Deno.test("-1001 - 9000", () => {
  const result = sub(["-1001", "9000"]);
  assertEquals(result, "-10001");
});

Deno.test("-1001 - 9009", () => {
  const result = sub(["-1001", "9009"]);
  assertEquals(result, "-10010");
});

Deno.test("-1001 - 9999", () => {
  const result = sub(["-1001", "9999"]);
  assertEquals(result, "-11000");
});

Deno.test("-1111 - 999", () => {
  const result = sub(["-1111", "999"]);
  assertEquals(result, "-2110");
});

Deno.test("-1101 - 999", () => {
  const result = sub(["-1101", "999"]);
  assertEquals(result, "-2100");
});

Deno.test("-1011 - 909", () => {
  const result = sub(["-1011", "909"]);
  assertEquals(result, "-1920");
});

Deno.test("-1011 - 111", () => {
  const result = sub(["-1011", "111"]);
  assertEquals(result, "-1122");
});

Deno.test("-1011 - 101", () => {
  const result = sub(["-1011", "101"]);
  assertEquals(result, "-1112");
});

Deno.test("-222.22 - 11.111", () => {
  const result = sub(["-222.22", "11.111"]);
  assertEquals(result, "-233.331");
});

Deno.test("-1.11 - 0.999", () => {
  const result = sub(["-1.11", "0.999"]);
  assertEquals(result, "-2.109");
});

Deno.test("-10.01 - 0.1", () => {
  const result = sub(["-10.01", "0.1"]);
  assertEquals(result, "-10.11");
});

Deno.test("-10.01 - 0.12", () => {
  const result = sub(["-10.01", "0.12"]);
  assertEquals(result, "-10.13");
});

Deno.test("-10 - 0.12", () => {
  const result = sub(["-10", "0.12"]);
  assertEquals(result, "-10.12");
});

Deno.test("-10.12 - 1", () => {
  const result = sub(["-10.12", "1"]);
  assertEquals(result, "-11.12");
});

Deno.test("-1.12 - 0.12", () => {
  const result = sub(["-1.12", "0.12"]);
  assertEquals(result, "-1.24");
});

Deno.test("-0.12 - 1.12", () => {
  const result = sub(["-0.12", "1.12"]);
  assertEquals(result, "-1.24");
});

Deno.test("-111 - 11", () => {
  const result = sub(["-111", "11"]);
  assertEquals(result, "-122");
});

Deno.test("-100.1 - 0.1", () => {
  const result = sub(["-100.1", "0.1"]);
  assertEquals(result, "-100.2");
});

Deno.test("-999.9 - 999.1", () => {
  const result = sub(["-999.9", "999.1"]);
  assertEquals(result, "-1999");
});

Deno.test("-5 - 13", () => {
  const result = sub(["-5", "13"]);
  assertEquals(result, "-18");
});

Deno.test("-0.1 - 1119", () => {
  const res = sub(["-0.1", "1119"]);
  assertEquals(res, "-1119.1");
});

Deno.test("-1.8 - 1.8", () => {
  const res = sub(["-1.8", "1.8"]);
  assertEquals(res, "-3.6");
});

Deno.test("-0.8 - 0.8", () => {
  const res = sub(["-0.8", "0.8"]);
  assertEquals(res, "-1.6");
});

Deno.test("-0.08 - 0.08", () => {
  const res = sub(["-0.08", "0.08"]);
  assertEquals(res, "-0.16");
});
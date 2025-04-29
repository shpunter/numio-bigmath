import { assertEquals } from "jsr:@std/assert";
import { add } from "../../../../index.ts";

Deno.test("-12 + 21", () => {
  const res = add(["-12", "21"]);
  assertEquals(res, "9");
});

Deno.test("-12 + 28", () => {
  const res = add(["-12", "28"]);
  assertEquals(res, "16");
});

Deno.test("-19 + 29", () => {
  const res = add(["-19", "29"]);
  assertEquals(res, "10");
});

Deno.test("-189 + 29", () => {
  const res = add(["-189", "29"]);
  assertEquals(res, "-160");
});

Deno.test("-1589 + 529", () => {
  const res = add(["-1589", "529"]);
  assertEquals(res, "-1060");
});

Deno.test("-529 + 1589", () => {
  const res = add(["-529", "1589"]);
  assertEquals(res, "1060");
});

Deno.test("-589 + 529", () => {
  const res = add(["-589", "529"]);
  assertEquals(res, "-60");
});

Deno.test("-1000 + 1", () => {
  const res = add(["-1000", "1"]);
  assertEquals(res, "-999");
});

Deno.test("-1001 + 1", () => {
  const res = add(["-1001", "1"]);
  assertEquals(res, "-1000");
});

Deno.test("-1001 + 0", () => {
  const res = add(["-1001", "0"]);
  assertEquals(res, "-1001");
});

Deno.test("-1001 + 10", () => {
  const res = add(["-1001", "10"]);
  assertEquals(res, "-991");
});

Deno.test("-1001 + 9", () => {
  const res = add(["-1001", "9"]);
  assertEquals(res, "-992");
});

Deno.test("-1001 + 9000", () => {
  const res = add(["-1001", "9000"]);
  assertEquals(res, "7999");
});

Deno.test("-1001 + 9009", () => {
  const res = add(["-1001", "9009"]);
  assertEquals(res, "8008");
});

Deno.test("-1001 + 9999", () => {
  const res = add(["-1001", "9999"]);
  assertEquals(res, "8998");
});

Deno.test("-1111 + 9999", () => {
  const res = add(["-1111", "9999"]);
  assertEquals(res, "8888");
});

Deno.test("-9 + 1", () => {
  const res = add(["-9", "1"]);
  assertEquals(res, "-8");
});

Deno.test("-99 + 1", () => {
  const res = add(["-99", "1"]);
  assertEquals(res, "-98");
});

Deno.test("-999 + 1", () => {
  const res = add(["-999", "1"]);
  assertEquals(res, "-998");
});

Deno.test("-9 + 11", () => {
  const res = add(["-9", "11"]);
  assertEquals(res, "2");
});

Deno.test("-9 + 111", () => {
  const res = add(["-9", "111"]);
  assertEquals(res, "102");
});

Deno.test("-9 + 100", () => {
  const res = add(["-9", "100"]);
  assertEquals(res, "91");
});

Deno.test("-9 + 101", () => {
  const res = add(["-9", "101"]);
  assertEquals(res, "92");
});

Deno.test("-0.001 + 0.101", () => {
  const res = add(["-0.001", "0.101"]);
  assertEquals(res, "0.1");
});

Deno.test("-0.1 + 0.9", () => {
  const res = add(["-0.1", "0.9"]);
  assertEquals(res, "0.8");
});

Deno.test("-0.10101 + 0.01010", () => {
  const res = add(["-0.10101", "0.01010"]);
  assertEquals(res, "-0.09091");
});

Deno.test("-1.11 + 9.99", () => {
  const res = add(["-1.11", "9.99"]);
  assertEquals(res, "8.88");
});

Deno.test("-1.0011 + 9.99", () => {
  const res = add(["-1.0011", "9.99"]);
  assertEquals(res, "8.9889");
});

Deno.test("-0.1 + 0.2", () => {
  const res = add(["-0.1", "0.2"]);
  assertEquals(res, "0.1");
});

Deno.test("-0.11111 + 0.9", () => {
  const res = add(["-0.11111", "0.9"]);
  assertEquals(res, "0.78889");
});

Deno.test("-0.9 + 0.11111", () => {
  const res = add(["-0.9", "0.11111"]);
  assertEquals(res, "-0.78889");
});

Deno.test("-999.9 + 0.111", () => {
  const res = add(["-999.9", "0.111"]);
  assertEquals(res, "-999.789");
});

Deno.test("-101.001 + 0.00001", () => {
  const res = add(["-101.001", "0.00001"]);
  assertEquals(res, "-101.00099");
});

Deno.test("-11.1 + 0.001", () => {
  const res = add(["-11.1", "0.001"]);
  assertEquals(res, "-11.099");
});

Deno.test("-0.001 + 11.1", () => {
  const res = add(["-0.001", "11.1"]);
  assertEquals(res, "11.099");
});

Deno.test("-110.001 + 11.1", () => {
  const res = add(["-110.001", "11.1"]);
  assertEquals(res, "-98.901");
});

Deno.test("-9 + 1.1", () => {
  const res = add(["-9", "1.1"]);
  assertEquals(res, "-7.9");
});

Deno.test("-1.1 + 9", () => {
  const res = add(["-1.1", "9"]);
  assertEquals(res, "7.9");
});

Deno.test("-19 + 1", () => {
  const res = add(["-19", "1"]);
  assertEquals(res, "-18");
});

Deno.test("-1.9 + 0.1", () => {
  const res = add(["-1.9", "0.1"]);
  assertEquals(res, "-1.8");
});

Deno.test("-1119 + 0.1", () => {
  const res = add(["-1119", "0.1"]);
  assertEquals(res, "-1118.9");
});

Deno.test("-0.1 + 1119", () => {
  const res = add(["-0.1", "1119"]);
  assertEquals(res, "1118.9");
});

Deno.test("-19 + 0.111", () => {
  const res = add(["-19", "0.111"]);
  assertEquals(res, "-18.889");
});

Deno.test("-0.111 + 19", () => {
  const res = add(["-0.111", "19"]);
  assertEquals(res, "18.889");
});

Deno.test("-999.999 + 99.99", () => {
  const res = add(["-999.999", "99.99"]);
  assertEquals(res, "-900.009");
});

Deno.test("-999999 + 99.99", () => {
  const res = add(["-999999", "99.99"]);
  assertEquals(res, "-999899.01");
});

Deno.test("-999.9 + 0.1", () => {
  const res = add(["-999.9", "0.1"]);
  assertEquals(res, "-999.8");
});

Deno.test("-0 + 999.9", () => {
  const res = add(["-0", "999.9"]);
  assertEquals(res, "999.9");
});

Deno.test("-10891.089 + 990.099", () => {
  const res = add(["-10891.089", "990.099"]);
  assertEquals(res, "-9900.99");
});

Deno.test("-1.8 + 1.8", () => {
  const res = add(["-1.8", "1.8"]);
  assertEquals(res, "0");
});

Deno.test("-0.8 + 0.8", () => {
  const res = add(["-0.8", "0.8"]);
  assertEquals(res, "0");
});

Deno.test("-0.08 + 0.08", () => {
  const res = add(["-0.08", "0.08"]);
  assertEquals(res, "0");
});
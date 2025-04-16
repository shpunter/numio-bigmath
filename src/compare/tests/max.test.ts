import { assertEquals } from "jsr:@std/assert";
import { max } from "../main.ts";

Deno.test("max 2 & 1", () => {
  assertEquals(max(["2", "1"]), "2");
});

Deno.test("max 1 & 2", () => {
  assertEquals(max(["1", "2"]), "2");
});

Deno.test("max 0.1 & 0.2", () => {
  assertEquals(max(["0.1", "0.2"]), "0.2");
});

Deno.test("max 0.2 & 0.1", () => {
  assertEquals(max(["0.2", "0.1"]), "0.2");
});

Deno.test("max 0.0002 & 0.002", () => {
  assertEquals(max(["0.0002", "0.002"]), "0.002");
});

Deno.test("max 0.002 & 0.0002", () => {
  assertEquals(max(["0.002", "0.0002"]), "0.002");
});

Deno.test("max 0.9991999 & 0.9919999", () => {
  assertEquals(max(["0.9991999", "0.9919999"]), "0.9991999");
});

Deno.test("max 0.9919999 & 0.9919999", () => {
  assertEquals(max(["0.9919999", "0.9991999"]), "0.9991999");
});

Deno.test("max 0 & 0.1", () => {
  assertEquals(max(["0", "0.1"]), "0.1");
});

Deno.test("max 0.11 & 0.001", () => {
  assertEquals(max(["0.11", "0.001"]), "0.11");
});

Deno.test("max 1.11 & 1.1", () => {
  assertEquals(max(["1.11", "1.1"]), "1.11");
});

Deno.test("max 1.1 & 1.11", () => {
  assertEquals(max(["1.1", "1.11"]), "1.11");
});

Deno.test("max 9.11 & 1.1", () => {
  assertEquals(max(["9.11", "1.1"]), "9.11");
});

Deno.test("max 1.1 & 9.11", () => {
  assertEquals(max(["1.1", "9.11"]), "9.11");
});

Deno.test("max 1.11 & 9.1", () => {
  assertEquals(max(["1.11", "9.1"]), "9.1");
});

Deno.test("max 9.1 & 1.11", () => {
  assertEquals(max(["9.1", "1.11"]), "9.1");
});

Deno.test("max 11.11 & 9.1", () => {
  assertEquals(max(["11.11", "9.1"]), "11.11");
});

Deno.test("max 9.1 & 11.11", () => {
  assertEquals(max(["9.1", "11.11"]), "11.11");
});

Deno.test("max 11.1 & 9.11", () => {
  assertEquals(max(["11.1", "9.11"]), "11.1");
});

Deno.test("max 9.11 & 11.1", () => {
  assertEquals(max(["9.11", "11.1"]), "11.1");
});

Deno.test("max 2 & 0.3", () => {
  assertEquals(max(["2", "0.3"]), "2");
});

Deno.test("max 0.3 & 2", () => {
  assertEquals(max(["0.3", "2"]), "2");
});

// negative left & right

Deno.test("max -2 & -1", () => {
  assertEquals(max(["-2", "-1"]), "-1");
});

Deno.test("max -1 & -2", () => {
  assertEquals(max(["-1", "-2"]), "-1");
});

Deno.test("max -0.1 & -0.2", () => {
  assertEquals(max(["-0.1", "-0.2"]), "-0.1");
});

Deno.test("max -0.2 & -0.1", () => {
  assertEquals(max(["-0.2", "-0.1"]), "-0.1");
});

Deno.test("max -0.0002 & -0.002", () => {
  assertEquals(max(["-0.0002", "-0.002"]), "-0.0002");
});

Deno.test("max -0.002 & -0.0002", () => {
  assertEquals(max(["-0.002", "-0.0002"]), "-0.0002");
});

Deno.test("max -0.9991999 & -0.9919999", () => {
  assertEquals(max(["-0.9991999", "-0.9919999"]), "-0.9919999");
});

Deno.test("max -0.9919999 & -0.9919999", () => {
  assertEquals(max(["-0.9919999", "-0.9991999"]), "-0.9919999");
});

Deno.test("max -0 & -0.1", () => {
  assertEquals(max(["-0", "-0.1"]), "-0");
});

Deno.test("max -0.11 & -0.001", () => {
  assertEquals(max(["-0.11", "-0.001"]), "-0.001");
});

Deno.test("max -1.11 & -1.1", () => {
  assertEquals(max(["-1.11", "-1.1"]), "-1.11");
});

Deno.test("max -1.1 & -1.11", () => {
  assertEquals(max(["-1.1", "-1.11"]), "-1.11");
});

Deno.test("max -9.11 & -1.1", () => {
  assertEquals(max(["-9.11", "-1.1"]), "-1.1");
});

Deno.test("max -1.1 & -9.11", () => {
  assertEquals(max(["-1.1", "-9.11"]), "-1.1");
});

Deno.test("max -1.11 & -9.1", () => {
  assertEquals(max(["-1.11", "-9.1"]), "-1.11");
});

Deno.test("max -9.1 & -1.11", () => {
  assertEquals(max(["-9.1", "-1.11"]), "-1.11");
});

Deno.test("max -11.11 & -9.1", () => {
  assertEquals(max(["-11.11", "-9.1"]), "-9.1");
});

Deno.test("max -9.1 & -11.11", () => {
  assertEquals(max(["-9.1", "-11.11"]), "-9.1");
});

Deno.test("max -11.1 & -9.11", () => {
  assertEquals(max(["-11.1", "-9.11"]), "-9.11");
});

Deno.test("max -9.11 & -11.1", () => {
  assertEquals(max(["-9.11", "-11.1"]), "-9.11");
});

Deno.test("max -2 & -0.3", () => {
  assertEquals(max(["-2", "-0.3"]), "-0.3");
});

Deno.test("max -0.3 & -2", () => {
  assertEquals(max(["-0.3", "-2"]), "-0.3");
});

// neg left & pos right

Deno.test("max -2 & 1", () => {
  assertEquals(max(["-2", "1"]), "1");
});

Deno.test("max -1 & 2", () => {
  assertEquals(max(["-1", "2"]), "2");
});

Deno.test("max -0.1 & 0.2", () => {
  assertEquals(max(["-0.1", "0.2"]), "0.2");
});

Deno.test("max -0.2 & 0.1", () => {
  assertEquals(max(["-0.2", "0.1"]), "0.1");
});

Deno.test("max -0.0002 & 0.002", () => {
  assertEquals(max(["-0.0002", "0.002"]), "0.002");
});

Deno.test("max -0.002 & 0.0002", () => {
  assertEquals(max(["-0.002", "0.0002"]), "0.0002");
});

Deno.test("max -0.9991999 & 0.9919999", () => {
  assertEquals(max(["-0.9991999", "0.9919999"]), "0.9919999");
});

Deno.test("max -0.9919999 & 0.9919999", () => {
  assertEquals(max(["-0.9919999", "0.9991999"]), "0.9991999");
});

Deno.test("max -0 & 0.1", () => {
  assertEquals(max(["-0", "0.1"]), "0.1");
});

Deno.test("max -0.11 & 0.001", () => {
  assertEquals(max(["-0.11", "0.001"]), "0.001");
});

Deno.test("max -1.11 & 1.1", () => {
  assertEquals(max(["-1.11", "1.1"]), "1.1");
});

Deno.test("max -1.1 & 1.11", () => {
  assertEquals(max(["-1.1", "1.11"]), "1.11");
});

Deno.test("max -9.11 & 1.1", () => {
  assertEquals(max(["-9.11", "1.1"]), "1.1");
});

Deno.test("max -1.1 & 9.11", () => {
  assertEquals(max(["-1.1", "9.11"]), "9.11");
});

Deno.test("max -1.11 & 9.1", () => {
  assertEquals(max(["-1.11", "9.1"]), "9.1");
});

Deno.test("max -9.1 & 1.11", () => {
  assertEquals(max(["-9.1", "1.11"]), "1.11");
});

Deno.test("max -11.11 & 9.1", () => {
  assertEquals(max(["-11.11", "9.1"]), "9.1");
});

Deno.test("max -9.1 & 11.11", () => {
  assertEquals(max(["-9.1", "11.11"]), "11.11");
});

Deno.test("max -11.1 & 9.11", () => {
  assertEquals(max(["-11.1", "9.11"]), "9.11");
});

Deno.test("max -9.11 & 11.1", () => {
  assertEquals(max(["-9.11", "11.1"]), "11.1");
});

Deno.test("max -2 & 0.3", () => {
  assertEquals(max(["-2", "0.3"]), "0.3");
});

Deno.test("max -0.3 & 2", () => {
  assertEquals(max(["-0.3", "2"]), "2");
});

// pos left & neg right

Deno.test("max 2 & -1", () => {
  assertEquals(max(["2", "-1"]), "2");
});

Deno.test("max 1 & -2", () => {
  assertEquals(max(["1", "-2"]), "1");
});

Deno.test("max 0.1 & -0.2", () => {
  assertEquals(max(["0.1", "-0.2"]), "0.1");
});

Deno.test("max 0.2 & -0.1", () => {
  assertEquals(max(["0.2", "-0.1"]), "0.2");
});

Deno.test("max 0.0002 & -0.002", () => {
  assertEquals(max(["0.0002", "-0.002"]), "0.0002");
});

Deno.test("max 0.002 & -0.0002", () => {
  assertEquals(max(["0.002", "-0.0002"]), "0.002");
});

Deno.test("max 0.9991999 & -0.9919999", () => {
  assertEquals(max(["0.9991999", "-0.9919999"]), "0.9991999");
});

Deno.test("max 0.9919999 & -0.9919999", () => {
  assertEquals(max(["0.9919999", "-0.9991999"]), "0.9919999");
});

Deno.test("max 0 & -0.1", () => {
  assertEquals(max(["0", "-0.1"]), "0");
});

Deno.test("max 0.11 & -0.001", () => {
  assertEquals(max(["0.11", "-0.001"]), "0.11");
});

Deno.test("max 1.11 & -1.1", () => {
  assertEquals(max(["1.11", "-1.1"]), "1.11");
});

Deno.test("max 1.1 & -1.11", () => {
  assertEquals(max(["1.1", "-1.11"]), "1.1");
});

Deno.test("max 9.11 & -1.1", () => {
  assertEquals(max(["9.11", "-1.1"]), "9.11");
});

Deno.test("max 1.1 & -9.11", () => {
  assertEquals(max(["1.1", "-9.11"]), "1.1");
});

Deno.test("max 1.11 & -9.1", () => {
  assertEquals(max(["1.11", "-9.1"]), "1.11");
});

Deno.test("max 9.1 & -1.11", () => {
  assertEquals(max(["9.1", "-1.11"]), "9.1");
});

Deno.test("max 11.11 & -9.1", () => {
  assertEquals(max(["11.11", "-9.1"]), "11.11");
});

Deno.test("max 9.1 & -11.11", () => {
  assertEquals(max(["9.1", "-11.11"]), "9.1");
});

Deno.test("max 11.1 & -9.11", () => {
  assertEquals(max(["11.1", "-9.11"]), "11.1");
});

Deno.test("max 9.11 & -11.1", () => {
  assertEquals(max(["9.11", "-11.1"]), "9.11");
});

Deno.test("max 2 & -0.3", () => {
  assertEquals(max(["2", "-0.3"]), "2");
});

Deno.test("max 0.3 & -2", () => {
  assertEquals(max(["0.3", "-2"]), "0.3");
});

// > 2 elements

Deno.test("max [1, 12, 11]", () => {
  assertEquals(max(["1", "12", "11"]), "12");
});

Deno.test("max [1, 12, 11, 8, 10]", () => {
  assertEquals(max(["1", "12", "11", "8", "10"]), "12");
});

Deno.test("max [0.1, 0.12, 0.11, 0.8, 0.01, 0.001]", () => {
  assertEquals(max(["0.1", "0.12", "0.11", "0.8", "0.01", "0.001"]), "0.8");
});

Deno.test("max [0.01, 0.1, 0.101, 0.1, 0.01]", () => {
  assertEquals(max(["0.01", "0.1", "0.101", "0.1", "0.01"]), "0.101");
});

import { assertEquals } from "jsr:@std/assert";
import { min } from "../main.ts";

Deno.test("min 2 & 1", () => {
  assertEquals(min(["2", "1"]), "1");
});

Deno.test("min 1 & 2", () => {
  assertEquals(min(["1", "2"]), "1");
});

Deno.test("min 0.1 & 0.2", () => {
  assertEquals(min(["0.1", "0.2"]), "0.1");
});

Deno.test("min 0.2 & 0.1", () => {
  assertEquals(min(["0.2", "0.1"]), "0.1");
});

Deno.test("min 0.0002 & 0.002", () => {
  assertEquals(min(["0.0002", "0.002"]), "0.0002");
});

Deno.test("min 0.002 & 0.0002", () => {
  assertEquals(min(["0.002", "0.0002"]), "0.0002");
});

Deno.test("min 0.9991999 & 0.9919999", () => {
  assertEquals(min(["0.9991999", "0.9919999"]), "0.9919999");
});

Deno.test("min 0.9919999 & 0.9919999", () => {
  assertEquals(min(["0.9919999", "0.9991999"]), "0.9919999");
});

Deno.test("min 0 & 0.1", () => {
  assertEquals(min(["0", "0.1"]), "0");
});

Deno.test("min 0.11 & 0.001", () => {
  assertEquals(min(["0.11", "0.001"]), "0.001");
});

Deno.test("min 1.11 & 1.1", () => {
  assertEquals(min(["1.11", "1.1"]), "1.1");
});

Deno.test("min 1.1 & 1.11", () => {
  assertEquals(min(["1.1", "1.11"]), "1.1");
});

Deno.test("min 9.11 & 1.1", () => {
  assertEquals(min(["9.11", "1.1"]), "1.1");
});

Deno.test("min 1.1 & 9.11", () => {
  assertEquals(min(["1.1", "9.11"]), "1.1");
});

Deno.test("min 1.11 & 9.1", () => {
  assertEquals(min(["1.11", "9.1"]), "1.11");
});

Deno.test("min 9.1 & 1.11", () => {
  assertEquals(min(["9.1", "1.11"]), "1.11");
});

Deno.test("min 11.11 & 9.1", () => {
  assertEquals(min(["11.11", "9.1"]), "9.1");
});

Deno.test("min 9.1 & 11.11", () => {
  assertEquals(min(["9.1", "11.11"]), "9.1");
});

Deno.test("min 11.1 & 9.11", () => {
  assertEquals(min(["11.1", "9.11"]), "9.11");
});

Deno.test("min 9.11 & 11.1", () => {
  assertEquals(min(["9.11", "11.1"]), "9.11");
});

Deno.test("min 2 & 0.3", () => {
  assertEquals(min(["2", "0.3"]), "0.3");
});

Deno.test("min 0.3 & 2", () => {
  assertEquals(min(["0.3", "2"]), "0.3");
});

// negative left & right

Deno.test("min -2 & -1", () => {
  assertEquals(min(["-2", "-1"]), "-2");
});

Deno.test("min -1 & -2", () => {
  assertEquals(min(["-1", "-2"]), "-2");
});

Deno.test("min -0.1 & -0.2", () => {
  assertEquals(min(["-0.1", "-0.2"]), "-0.2");
});

Deno.test("min -0.2 & -0.1", () => {
  assertEquals(min(["-0.2", "-0.1"]), "-0.2");
});

Deno.test("min -0.0002 & -0.002", () => {
  assertEquals(min(["-0.0002", "-0.002"]), "-0.002");//!
});

Deno.test("min -0.002 & -0.0002", () => {
  assertEquals(min(["-0.002", "-0.0002"]), "-0.002"); //!
});

Deno.test("min -0.9991999 & -0.9919999", () => {
  assertEquals(min(["-0.9991999", "-0.9919999"]), "-0.9991999");
});

Deno.test("min -0.9919999 & -0.9919999", () => {
  assertEquals(min(["-0.9919999", "-0.9991999"]), "-0.9991999");
});

Deno.test("min -0 & -0.1", () => {
  assertEquals(min(["-0", "-0.1"]), "-0.1");
});

Deno.test("min -0.11 & -0.001", () => {
  assertEquals(min(["-0.11", "-0.001"]), "-0.11");
});

Deno.test("min -1.11 & -1.1", () => {
  assertEquals(min(["-1.11", "-1.1"]), "-1.1");
});

Deno.test("min -1.1 & -1.11", () => {
  assertEquals(min(["-1.1", "-1.11"]), "-1.1");
});

Deno.test("min -9.11 & -1.1", () => {
  assertEquals(min(["-9.11", "-1.1"]), "-9.11");
});

Deno.test("min -1.1 & -9.11", () => {
  assertEquals(min(["-1.1", "-9.11"]), "-9.11");
});

Deno.test("min -1.11 & -9.1", () => {
  assertEquals(min(["-1.11", "-9.1"]), "-9.1");
});

Deno.test("min -9.1 & -1.11", () => {
  assertEquals(min(["-9.1", "-1.11"]), "-9.1");
});

Deno.test("min -11.11 & -9.1", () => {
  assertEquals(min(["-11.11", "-9.1"]), "-11.11");
});

Deno.test("min -9.1 & -11.11", () => {
  assertEquals(min(["-9.1", "-11.11"]), "-11.11");
});

Deno.test("min -11.1 & -9.11", () => {
  assertEquals(min(["-11.1", "-9.11"]), "-11.1");
});

Deno.test("min -9.11 & -11.1", () => {
  assertEquals(min(["-9.11", "-11.1"]), "-11.1");
});

Deno.test("min -2 & -0.3", () => {
  assertEquals(min(["-2", "-0.3"]), "-2");
});

Deno.test("min -0.3 & -2", () => {
  assertEquals(min(["-0.3", "-2"]), "-2");
});

// neg left & pos right

Deno.test("min -2 & 1", () => {
  assertEquals(min(["-2", "1"]), "-2");
});

Deno.test("min -1 & 2", () => {
  assertEquals(min(["-1", "2"]), "-1");
});

Deno.test("min -0.1 & 0.2", () => {
  assertEquals(min(["-0.1", "0.2"]), "-0.1");
});

Deno.test("min -0.2 & 0.1", () => {
  assertEquals(min(["-0.2", "0.1"]), "-0.2");
});

Deno.test("min -0.0002 & 0.002", () => {
  assertEquals(min(["-0.0002", "0.002"]), "-0.0002");
});

Deno.test("min -0.002 & 0.0002", () => {
  assertEquals(min(["-0.002", "0.0002"]), "-0.002");
});

Deno.test("min -0.9991999 & 0.9919999", () => {
  assertEquals(min(["-0.9991999", "0.9919999"]), "-0.9991999");
});

Deno.test("min -0.9919999 & 0.9919999", () => {
  assertEquals(min(["-0.9919999", "0.9991999"]), "-0.9919999");
});

Deno.test("min -0 & 0.1", () => {
  assertEquals(min(["-0", "0.1"]), "-0");
});

Deno.test("min -0.11 & 0.001", () => {
  assertEquals(min(["-0.11", "0.001"]), "-0.11");
});

Deno.test("min -1.11 & 1.1", () => {
  assertEquals(min(["-1.11", "1.1"]), "-1.11");
});

Deno.test("min -1.1 & 1.11", () => {
  assertEquals(min(["-1.1", "1.11"]), "-1.1");
});

Deno.test("min -9.11 & 1.1", () => {
  assertEquals(min(["-9.11", "1.1"]), "-9.11");
});

Deno.test("min -1.1 & 9.11", () => {
  assertEquals(min(["-1.1", "9.11"]), "-1.1");
});

Deno.test("min -1.11 & 9.1", () => {
  assertEquals(min(["-1.11", "9.1"]), "-1.11");
});

Deno.test("min -9.1 & 1.11", () => {
  assertEquals(min(["-9.1", "1.11"]), "-9.1");
});

Deno.test("min -11.11 & 9.1", () => {
  assertEquals(min(["-11.11", "9.1"]), "-11.11");
});

Deno.test("min -9.1 & 11.11", () => {
  assertEquals(min(["-9.1", "11.11"]), "-9.1");
});

Deno.test("min -11.1 & 9.11", () => {
  assertEquals(min(["-11.1", "9.11"]), "-11.1");
});

Deno.test("min -9.11 & 11.1", () => {
  assertEquals(min(["-9.11", "11.1"]), "-9.11");
});

Deno.test("min -2 & 0.3", () => {
  assertEquals(min(["-2", "0.3"]), "-2");
});

Deno.test("min -0.3 & 2", () => {
  assertEquals(min(["-0.3", "2"]), "-0.3");
});

// pos left & neg right

Deno.test("min 2 & -1", () => {
  assertEquals(min(["2", "-1"]), "-1");
});

Deno.test("min 1 & -2", () => {
  assertEquals(min(["1", "-2"]), "-2");
});

Deno.test("min 0.1 & -0.2", () => {
  assertEquals(min(["0.1", "-0.2"]), "-0.2");
});

Deno.test("min 0.2 & -0.1", () => {
  assertEquals(min(["0.2", "-0.1"]), "-0.1");
});

Deno.test("min 0.0002 & -0.002", () => {
  assertEquals(min(["0.0002", "-0.002"]), "-0.002");
});

Deno.test("min 0.002 & -0.0002", () => {
  assertEquals(min(["0.002", "-0.0002"]), "-0.0002");
});

Deno.test("min 0.9991999 & -0.9919999", () => {
  assertEquals(min(["0.9991999", "-0.9919999"]), "-0.9919999");
});

Deno.test("min 0.9919999 & -0.9919999", () => {
  assertEquals(min(["0.9919999", "-0.9991999"]), "-0.9991999");
});

Deno.test("min 0 & -0.1", () => {
  assertEquals(min(["0", "-0.1"]), "-0.1");
});

Deno.test("min 0.11 & -0.001", () => {
  assertEquals(min(["0.11", "-0.001"]), "-0.001");
});

Deno.test("min 1.11 & -1.1", () => {
  assertEquals(min(["1.11", "-1.1"]), "-1.1");
});

Deno.test("min 1.1 & -1.11", () => {
  assertEquals(min(["1.1", "-1.11"]), "-1.11");
});

Deno.test("min 9.11 & -1.1", () => {
  assertEquals(min(["9.11", "-1.1"]), "-1.1");
});

Deno.test("min 1.1 & -9.11", () => {
  assertEquals(min(["1.1", "-9.11"]), "-9.11");
});

Deno.test("min 1.11 & -9.1", () => {
  assertEquals(min(["1.11", "-9.1"]), "-9.1");
});

Deno.test("min 9.1 & -1.11", () => {
  assertEquals(min(["9.1", "-1.11"]), "-1.11");
});

Deno.test("min 11.11 & -9.1", () => {
  assertEquals(min(["11.11", "-9.1"]), "-9.1");
});

Deno.test("min 9.1 & -11.11", () => {
  assertEquals(min(["9.1", "-11.11"]), "-11.11");
});

Deno.test("min 11.1 & -9.11", () => {
  assertEquals(min(["11.1", "-9.11"]), "-9.11");
});

Deno.test("min 9.11 & -11.1", () => {
  assertEquals(min(["9.11", "-11.1"]), "-11.1");
});

Deno.test("min 2 & -0.3", () => {
  assertEquals(min(["2", "-0.3"]), "-0.3");
});

Deno.test("min 0.3 & -2", () => {
  assertEquals(min(["0.3", "-2"]), "-2");
});

// > 2 elements

Deno.test("min [1, 12, 11]", () => {
  assertEquals(min(["1", "12", "11"]), "1");
});

Deno.test("min [1, 12, 11, 8, 10]", () => {
  assertEquals(min(["1", "12", "11", "8", "10"]), "1");
});

Deno.test("min [0.1, 0.12, 0.11, 0.8, 0.01, 0.001]", () => {
  assertEquals(min(["0.1", "0.12", "0.11", "0.8", "0.01", "0.001"]), "0.001");
});

import { assertEquals } from "jsr:@std/assert";
import { add } from "../add.ts";

Deno.test("999 + 999 + 999", () => {
  const result = add(["999", "999", "999"]);
  assertEquals(result, "2997");
});

Deno.test("999.1 + 999", () => {
  const result = add(["999.1", "999"]);
  assertEquals(result, "1998.1");
});

Deno.test("999.9 + 999.9 + 999.9", () => {
  const result = add(["999.9", "999.9", "999.9"]);
  assertEquals(result, "2999.7");
});

Deno.test("999.9 x12", () => {
  const result = add(Array(12).fill("999.9"));
  assertEquals(result, "11998.8");
});

Deno.test("990.099 x12", () => {
  const result = add(Array(12).fill("990.099"));
  assertEquals(result, "11881.188");
});

Deno.test("990.099 x55", () => {
  const result = add(Array(55).fill("990.099"));
  assertEquals(result, "54455.445");
});

Deno.test("9 x12", () => {
  const result = add(Array(12).fill("9"));
  assertEquals(result, "108");
});

Deno.test("999 x12", () => {
  const result = add(Array(12).fill("999"));
  assertEquals(result, "11988");
});

Deno.test("0.9 x12", () => {
  const result = add(Array(12).fill("0.9"));
  assertEquals(result, "10.8");
});

Deno.test("0.09 x12", () => {
  const result = add(Array(12).fill("0.09"));
  assertEquals(result, "1.08");
});

Deno.test("0.009 x12", () => {
  const result = add(Array(12).fill("0.009"));
  assertEquals(result, "0.108");
});

Deno.test("-0.009 x12", () => {
  const result = add(Array(12).fill("-0.009"));
  assertEquals(result, "-0.108");
});

Deno.test("-10 + 5 + 8", () => {
  const result = add(["-10", "5", "8"]);
  assertEquals(result, "3");
});

Deno.test("-8 + 3", () => {
  const result = add(["-8", "3"]);
  assertEquals(result, "-5");
}); 

Deno.test("-103 + 95 + 97", () => {
  const result = add(["-103", "95", "97"]);
  assertEquals(result, "89");
}); 

Deno.test("-103 + 95 + 97", () => {
  const result = add(["13", "-8", "-6", "-6"]);
  assertEquals(result, "-7");
}); 


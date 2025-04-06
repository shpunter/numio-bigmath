import { assertEquals } from "jsr:@std/assert";
import { quartile } from "../main.ts";

Deno.test("[1, 2, 3]", () => {
  const res = quartile(["1", "2", "3"]);
  assertEquals(res, { Q1: "1", Q2: "2", Q3: "3" });
});

Deno.test("[1, 2, 3, 4]", () => {
  const res = quartile(["1", "2", "3", "4"]);
  assertEquals(res, { Q1: "1.5", Q2: "2.5", Q3: "3.5" });
});

Deno.test("[1, 2, 3, 4, 5]", () => {
  const res = quartile(["1", "2", "3", "4", "5"]);
  assertEquals(res, { Q1: "1.5", Q2: "3", Q3: "4.5" });
});

Deno.test("[1, 2, 3, 4, 5, 6]", () => {
  const res = quartile(["1", "2", "3", "4", "5", "6"]);
  assertEquals(res, { Q1: "2", Q2: "3.5", Q3: "5" });
});

Deno.test("[1, 2, 3, 4, 5, 6, 7]", () => {
  const res = quartile(["1", "2", "3", "4", "5", "6", "7"]);
  assertEquals(res, { Q1: "2", Q2: "4", Q3: "6" });
});

Deno.test("[1, 2, 3, 4, 5, 6, 7, 8]", () => {
  const res = quartile(["1", "2", "3", "4", "5", "6", "7", "8"]);
  assertEquals(res, { Q1: "2.5", Q2: "4.5", Q3: "6.5" });
});

Deno.test("[1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
  const res = quartile(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  assertEquals(res, { Q1: "2.5", Q2: "5", Q3: "7.5" });
});

Deno.test("[0.001, 0.3, 0.4, 1]", () => {
  const res = quartile(["0.001", "0.3", "0.4", "1"]);
  assertEquals(res, { Q1: "0.1505", Q2: "0.35", Q3: "0.7" });
});

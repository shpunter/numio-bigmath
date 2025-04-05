import { assertEquals } from "jsr:@std/assert";
import { pipe } from "../main.ts";

Deno.test("pipe.add", () => {
  const res = pipe.add(["1", "2", "3", "4", "5"]).calc();

  assertEquals(res, "15");
});

Deno.test("pipe.add", () => {
  const res = pipe.add(["0.9", "0.99"]).calc();

  assertEquals(res, "1.89");
});

Deno.test("pipe.add", () => {
  const res = pipe
    .add(["1", "2", "3", "4", "5"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .calc();

  assertEquals(res, "19.997");
});

Deno.test("pipe.add.sub", () => {
  const res = pipe
    .add(["1", "2", "3", "4", "5"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub", () => {
  const res = pipe
    .add(["1", "2", "3", "4", "5"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub", () => {
  const res = pipe
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .add(["1", "2", "3", "4", "5"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub.mul.div", () => {
  const res = pipe
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .add(["1", "2", "3", "4", "5"])
    .sub(["1", "0.9"])
    .mul(["2", "3"])
    .div(["5"])
    .add(["1", "2", "0.2"])
    .calc();

  assertEquals(res, "20");
});

Deno.test("pipe.add.sub.mul.div", () => {
  const addNums = ["1", "2", "3"];
  const subNums = ["0.2", "0.3"];
  const divNums = ["4"];
  const mulNums = ["2", "5", "0.2"];

  const res = pipe.add(addNums)
    .div(divNums)
    .sub(subNums)
    .mul(mulNums)
    .calc();

  assertEquals(res, "2");
});

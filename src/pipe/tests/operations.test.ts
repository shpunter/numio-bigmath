import { assertEquals } from "jsr:@std/assert";
import { Pipe } from "../main.ts";

Deno.test("pipe.add", () => {
  const res = new Pipe().add(["1", "2", "3", "4", "5"]).calc();

  assertEquals(res, "15");
});

Deno.test("pipe.add", () => {
  const res = new Pipe().add(["0.9", "0.99"]).calc();

  assertEquals(res, "1.89");
});

Deno.test("pipe.add.add", () => {
  const res = new Pipe()
    .add(["1", "2", "3", "4", "5"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .calc();

  assertEquals(res, "19.997");
});

Deno.test("pipe.add.add.sub", () => {
  const res = new Pipe()
    .add(["1", "2", "3", "4", "5"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub.add", () => {
  const res = new Pipe()
    .add(["1", "2", "3", "4", "5"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub.add", () => {
  const res = new Pipe()
    .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
    .sub(["1.009", "1.099", "0.999", "0.99"])
    .add(["1", "2", "3", "4", "5"])
    .calc();

  assertEquals(res, "15.9");
});

Deno.test("pipe.add.sub.add.sub.mul.div.add", () => {
  const res = new Pipe()
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

Deno.test("pipe.add.div.sub.mul", () => {
  const addNums = ["1", "2", "3"];
  const subNums = ["0.2", "0.3"];
  const divNums = ["4"];
  const mulNums = ["2", "5", "0.2"];

  const res = new Pipe().add(addNums)
    .div(divNums)
    .sub(subNums)
    .mul(mulNums)
    .calc();

  assertEquals(res, "2");
});

Deno.test("pipe.add.", () => {
  const addNums = ["9.999", "999.9", "9.999", "999.9"];
  const res = new Pipe().add(addNums).calc();

  assertEquals(res, "2019.798");
});

Deno.test("pipe.add.add", () => {
  const addNums = ["9.999", "999.9", "9.999", "999.9"];
  const res = new Pipe().add(addNums).add(addNums).calc();

  assertEquals(res, "4039.596");
});

Deno.test("pipe.add.sub", () => {
  const addNums = ["9.999", "999.9", "9.999", "999.9"];
  const subNums = ["9.999", "999.9", "9.999"];

  const res = new Pipe().add(addNums).sub(subNums).calc();

  assertEquals(res, "999.9");
});

Deno.test("pipe.add.sub.div", () => {
  const addNums = ["9.999", "999.9", "9.999", "999.9"];
  const subNums = ["9.999", "999.9", "9.999"];
  const divNums = ["4"];

  const res = new Pipe().add(addNums)
    .sub(subNums)
    .div(divNums)
    .calc();

  assertEquals(res, "249.975");
});

Deno.test("pipe.add.sub.div.mul", () => {
  const addNums = ["9.999", "999.9", "9.999", "999.9"];
  const subNums = ["9.999", "999.9", "9.999"];
  const divNums = ["4"];
  const mulNums = ["2", "5", "0.2"];

  const res = new Pipe().add(addNums)
    .sub(subNums)
    .div(divNums)
    .mul(mulNums)
    .calc();

  assertEquals(res, "499.95");
});

Deno.test("pipe.div", () => {
  const res = new Pipe().div(["8", "4"]).calc();

  assertEquals(res, "2");
});

Deno.test("pipe.add.div", () => {
  const res = new Pipe().add(["1", "7"]).div(["4"]).calc();

  assertEquals(res, "2");
})

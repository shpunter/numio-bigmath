import { assertEquals } from "@std/assert/equals";
import { isOctal } from "../../../index.ts";

Deno.test("0o1234567", () => {
  assertEquals(isOctal("0o1234567"), true);
});

Deno.test("0o12345678", () => {
  assertEquals(isOctal("0o12345678"), false);
});

Deno.test("0o81234567", () => {
  assertEquals(isOctal("0o81234567"), false);
});

Deno.test("0o12345679", () => {
  assertEquals(isOctal("0o12345679"), false);
});

Deno.test("0o91234567", () => {
  assertEquals(isOctal("0o91234567"), false);
});

Deno.test("0o1234 567", () => {
  assertEquals(isOctal("0o1234 567"), false);
});

Deno.test("0o-1234567", () => {
  assertEquals(isOctal("0o-1234567"), false);
});

Deno.test("0o1.2", () => {
  assertEquals(isOctal("0o1.2"), false);
});

Deno.test("0o12.", () => {
  assertEquals(isOctal("0o12."), false);
});

Deno.test("0012", () => {
  assertEquals(isOctal("0012"), false);
});

Deno.test("o12", () => {
  assertEquals(isOctal("o12"), false);
});

Deno.test("12", () => {
  assertEquals(isOctal("12"), false);
});

Deno.test("o012", () => {
  assertEquals(isOctal("o012"), false);
});

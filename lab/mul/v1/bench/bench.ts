import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { mulV1 } from "../index.ts";

const longInt1 = "99999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const longInt2 = "33333333333333333333333333333333333333333333333333333333333333333333333333333333333"
const longDec1 = "0.00000000000000000000000000000000000000000000000000000000000000000000000001423543";
const longDec2 = "0.000000000000000000000000000000000000000000000000000000000000000044435234"
const trickyLongDec1 = "0.100000000000000000000000000000000000000000000000000000000000000000000000001423543";
const trickyLongDec2 = "0.1000000000000000000000000000000000000000000000000000000000000000044435234"

Deno.bench("mulV1 long int", () => {
    mulV1(longInt1, longInt2);
});

Deno.bench("Big long int", () => {
    const x = new Big(longInt1);
    x.times(longInt2);
});

Deno.bench("mulV1 long dec", () => {
    mulV1(longDec1, longDec2);
});

Deno.bench("Big long dec", () => {
    const x = new Big(longDec1);
    x.times(longDec2);
});

Deno.bench("mulV1 long dec", () => {
    mulV1(trickyLongDec1, trickyLongDec2);
});

Deno.bench("Big long dec", () => {
    const x = new Big(trickyLongDec1);
    x.times(trickyLongDec2);
});

import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { addNumV1 } from "../../addNumV1/index.ts";
import { addNumV4 } from "../../addNumV4/index.ts";

const num1BigIntPart = "1111111111111111111111111111111111111111111111111111111111111111111111111.111";
const num2BigIntPart = "9999999999999999999999999999999999999999999999999999999999999999999999999.999";
const num1BigFracPart = "0.1111111111111111111111111111111111111111111111111111111111111111111111111111";
const num2BigFracPart = "0.9999999999999999999999999999999999999999999999999999999999999999999999999999";
const numSmallIntFracPart = "0.9";

Deno.bench("v4 => big int part", () => {
    addNumV4(num1BigIntPart, num2BigIntPart);
});

Deno.bench("v1 => big int part", () => {
    addNumV1(num1BigIntPart, num2BigIntPart);
});

Deno.bench("bigjs => big int part", () => {
    const x = new Big(num1BigIntPart);
    const y = new Big(num2BigIntPart);
    x.plus(y);
});
//----------------------------------------------------------------------
Deno.bench("v4 => big frac part", () => {
    addNumV4(num1BigFracPart, num2BigFracPart);
});

Deno.bench("v1 => big frac part", () => {
    addNumV1(num1BigFracPart, num2BigFracPart);
});

Deno.bench("bigjs => big int part", () => {
    const x = new Big(num1BigFracPart);
    const y = new Big(num2BigFracPart);
    x.plus(y);
});
//----------------------------------------------------------------------
Deno.bench("v4 => big frac part & small num", () => {
    addNumV4(num1BigFracPart, numSmallIntFracPart);
});

Deno.bench("v1 => big frac part & small num", () => {
    addNumV1(num1BigFracPart, numSmallIntFracPart);
});

Deno.bench("bigjs => big int part & small num", () => {
    const x = new Big(num1BigFracPart);
    const y = new Big(numSmallIntFracPart);
    x.plus(y);
});
//----------------------------------------------------------------------

Deno.bench("v4 => big int part & small num", () => {
    addNumV4(num1BigIntPart, numSmallIntFracPart);
});

Deno.bench("v1 => big int part & small num", () => {
    addNumV1(num1BigIntPart, numSmallIntFracPart);
});

Deno.bench("bigjs => big int part & small num", () => {
    const x = new Big(num1BigIntPart);
    const y = new Big(numSmallIntFracPart);
    x.plus(y);
});
//----------------------------------------------------------------------


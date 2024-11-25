import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { addNumV1 } from "../../addNumV1/index.ts";
import { addNumV2 } from "../../addNumV2/index.ts";
import { addNumV3 } from "../../addNumV3/index.ts";
import { addNumV4 } from "../../addNumV4/index.ts";

const num1 = "999999999999999999999999999999999999999999999999999999999999999";
const num2 = "111111111111111111111111111111111111111111111111111111111111111";
const short = "1";

Deno.bench("long addNumV4", () => {
    const sum = addNumV4(num1, num2);
});

Deno.bench("long addNumV3", () => {
    const sum = addNumV3(num1, num2);
});

Deno.bench("long addNumV2", () => {
    const sum = addNumV2(num1, num2);
});

Deno.bench("long addNumV1", () => {
    const sum = addNumV1(num1, num2);
});

Deno.bench("long big.js", () => {
    const x = new Big(num1);
    const y = new Big(num2);
    const res = x.plus(y);
});


Deno.bench("short addNumV4", () => {
    const sum = addNumV4(num1, short);
});

Deno.bench("short addNumV3", () => {
    const sum = addNumV3(num1, short);
});

Deno.bench("short addNumV2", () => {
    const sum = addNumV2(num1, short);
});

Deno.bench("short addNumV1", () => {
    const sum = addNumV1(num1, short);
});

Deno.bench("short big.js", () => {
    const x = new Big(num1);
    const y = new Big(short);
    const res = x.plus(y);
});

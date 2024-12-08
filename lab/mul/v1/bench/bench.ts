import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { mulV1 } from "../index.ts";

const num1 = "99999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const num2 = "33333333333333333333333333333333333333333333333333333333333333333333333333333333333"

Deno.bench("mul", () => {
    mulV1(num1, num2);
});

Deno.bench("pow", () => {
    const x = new Big(num1);
    x.times(num2);
});

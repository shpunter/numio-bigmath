import { addNumV1 } from "../index.ts";
import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";

Deno.bench("add addNumV1 => small", () => {
    const num1 =
        "0.000000000000000000000000000000000000000000000000000000000001";
    const num2 =
        "0.000000000000000000000000000000000000000000000000000000000002";
    const res = addNumV1(num1, num2);
});

Deno.bench("add using big.js => small", () => {
    const x = new Big(
        "0.000000000000000000000000000000000000000000000000000000000001",
    );
    const y = new Big(
        "0.000000000000000000000000000000000000000000000000000000000002",
    );
    const res = x.plus(y);
});

Deno.bench("add addNumV1 => middle", () => {
    const num1 =
        "0000000000000000000000000000.000000000000000000000000000000001";
    const num2 =
        "0000000000000000000000000000.000000000000000000000000000000002";
    const res = addNumV1(num1, num2);
});

Deno.bench("add using big.js => middle", () => {
    const x = new Big(
        "0000000000000000000000000000.000000000000000000000000000000001",
    );
    const y = new Big(
        "0000000000000000000000000000.000000000000000000000000000000002",
    );
    const res = x.plus(y);
});

Deno.bench("add addNumV1 => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addNumV1(num1, num2);
});

Deno.bench("add using big.js => big", () => {
    const x = new Big(
        "999999999999999999999999999999999999999999999999999999999999999",
    );
    const y = new Big(
        "111111111111111111111111111111111111111111111111111111111111111",
    );
    const res = x.plus(y);
});

// Deno.bench("addNumV1 => 0.3", () => {
//     const num1 = "0.1";
//     const num2 = "0.2";
//     const res = addNumV1(num1, num2);
// });

// Deno.bench("big.js => 0.3", () => {
//     const x = new Big("0.1");
//     const y = new Big("0.2");
//     const res = x.plus(y);
// });



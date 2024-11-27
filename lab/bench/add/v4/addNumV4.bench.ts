import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
// import { addNumV1 } from "../../../add/addNumV1/index.ts";
// import { addNumV2 } from "../../../add/addNumV2/index.ts";
// import { addNumV3 } from "../../../add/addNumV3/index.ts";
import { addNumV4 } from "../../../add/addNumV4/index.ts";

const num1 = "999999999999999999999999999999999999999999999999999999999999999999999999";
const num2 = "111111111111111111111111111111111111111111111111111111111111111111111111";
const short = "1";

const small1 = "9.99999999999999999999999999999999999999999999999999999999999999999999999";
const small2 = "1.11111111111111111111111111111111111111111111111111111111111111111111111";

const tricky1 = "0.10000000000000000000000000000000000000000000000000000000000000000000001";
const tricky2 = "0.10000000000000000000000000000000000000000000000000000000000000000000001";


Deno.bench("long addNumV4", () => {
    addNumV4(num1, num2);
});

// Deno.bench("long addNumV3", () => {
//     addNumV3(num1, num2);
// });

// Deno.bench("long addNumV2", () => {
//     addNumV2(num1, num2);
// });

// Deno.bench("long addNumV1", () => {
//     addNumV1(num1, num2);
// });

Deno.bench("long big.js", () => {
    const x = new Big(num1);
    const y = new Big(num2);
    x.plus(y);
});


Deno.bench("short addNumV4", () => {
    addNumV4(num1, short);
});

// Deno.bench("short addNumV3", () => {
//     addNumV3(num1, short);
// });

// Deno.bench("short addNumV2", () => {
//     addNumV2(num1, short);
// });

// Deno.bench("short addNumV1", () => {
//     addNumV1(num1, short);
// });

Deno.bench("short big.js", () => {
    const x = new Big(num1);
    const y = new Big(short);
    x.plus(y);
});

Deno.bench("small addNumV4", () => {
    addNumV4(small1, small2);
});

Deno.bench("small big.js", () => {
    const x = new Big(small1);
    const y = new Big(small2);
    x.plus(y);
});

Deno.bench("tricky addNumV4", () => {
    addNumV4(tricky1, tricky2);
});

Deno.bench("tricky big.js", () => {
    const x = new Big(tricky1);
    const y = new Big(tricky2);
    x.plus(y);
});

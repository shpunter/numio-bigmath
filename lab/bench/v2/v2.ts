import { addNumV1 } from "../../addNumV1/index.ts";
import { addIntegerPart } from "../../addNumV1/utils.ts";
import { addNumV2 } from "../../addNumV2/index.ts";
import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";

Deno.bench("add using big.js => big", () => {
    const x = new Big(
        "999999999999999999999999999999999999999999999999999999999999999",
    );
    const y = new Big(
        "111111111111111111111111111111111111111111111111111111111111111",
    );
    const res = x.plus(y);
});

Deno.bench("addV2 => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addNumV2(num1, num2);
});

Deno.bench("addNumV1 => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addNumV1(num1, num2);
});

Deno.bench("addIntegerPart => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addIntegerPart(num1, num2);
});



import { addNum } from "../../addNum/index.ts";
import { addIntegerDigits } from "../../addNum/utils.ts";
import { addV2 } from "../../addNumV2/index.ts";
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
    const res = addV2(num1, num2);
});

Deno.bench("addNum => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addNum(num1, num2);
});

Deno.bench("addIntegerDigits => big", () => {
    const num1 =
        "999999999999999999999999999999999999999999999999999999999999999";
    const num2 =
        "111111111111111111111111111111111111111111111111111111111111111";
    const res = addIntegerDigits(num1, num2);
});



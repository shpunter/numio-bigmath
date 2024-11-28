import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { subIntPart } from "../../../sub/v1/utils.ts";

const numLong1 =
    "111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numLong2 =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numLong1Array = numLong1.split("").map((el) => +el);
const numLong2Array = numLong1.split("").map((el) => +el);

Deno.bench("big int subIntPart", () => {
    subIntPart(numLong1Array, numLong2Array);
});

Deno.bench("big int Bigjs", () => {
    const x = new Big(numLong1);
    const y = new Big(numLong2);
    x.plus(y);
});

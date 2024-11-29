import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { subIntPart } from "../utils.ts";

const numLong1 =
    "1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numLong2 =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numLong1Array = numLong1.split("").map((el) => +el);
const numLong2Array = numLong2.split("").map((el) => +el);

Deno.bench("big int subIntPart", () => {
    subIntPart(numLong1Array, numLong2Array);
});

Deno.bench("big int Bigjs", () => {
    const x = new Big(numLong1);
    const y = numLong2;
    x.minus(y);
});

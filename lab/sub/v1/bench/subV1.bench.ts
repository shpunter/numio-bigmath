import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { subV1 } from "../index.ts";

const numLong1 =
    "1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numLong2 =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";

Deno.bench("big int subIntPart", () => {
    subV1(numLong1, numLong2);
});

Deno.bench("big int Bigjs", () => {
    const x = new Big(numLong1);
    const y = numLong2;
    x.minus(y);
});
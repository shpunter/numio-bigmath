import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
// import { getBigger } from "../../../sub/v1/utils.ts";
// import { subV1 } from "../../../sub/v1/index.ts";

const small1 = "0.00000000000000000000000000000000000000000000000000000000001";
const small2 = "0.00000000000000000000000000000000000000000000000000000000002";

const tricky1 =
    "0.100000000000000000000000000000000000000000000000000000000001";
const tricky2 =
    "0.100000000000000000000000000000000000000000000000000000000002";

const bigInt1 =
    "999999999999999999999999999999999999999999999999999999999999999999999999";
const bigInt2 =
    "111111111111111111111111111111111111111111111111111111111111111111111111";

const smallCloneInt1 =
    "9.999999999999999999999999999999999999999999999999999999999999999999999999";
const smallCloneInt2 =
    "9.111111111111111111111111111111111111111111111111111111111111111111111111";

const numSuperHeavy1 =
    "0.1223123235111111112805787019874108924751098743091826475102938471092835718256";
const numSuperHeavy2 =
    "0.2123123235111111112805787019874108924751098743091826475102938471092835718256";

Deno.bench("small", () => {
    const x = new Big(small1);
    const y = new Big(small2);

    x.minus(y);
});

Deno.bench("tricky small", () => {
    const x = new Big(tricky1);
    const y = new Big(tricky2);

    x.minus(y);
});

Deno.bench("big int", () => {
    const x = new Big(bigInt1);
    const y = new Big(bigInt2);

    x.minus(y);
});
Deno.bench("small clone of big int", () => {
    const x = new Big(smallCloneInt1);
    const y = new Big(smallCloneInt2);

    x.minus(y);
});

Deno.bench("numSuperHeavy", () => {
    const x = new Big(numSuperHeavy1);
    const y = new Big(numSuperHeavy2);

    x.minus(y);
});

Deno.bench("numSuperHeavy and 1", () => {
    const x = new Big(numSuperHeavy1);
    const y = new Big("1");

    x.minus(y);
});

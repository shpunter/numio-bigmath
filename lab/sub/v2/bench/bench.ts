// import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { subV1 } from "../../v1/index.ts";
import { subV2 } from "../index.ts";

const numLong1 =
    "1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numLong2 =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numFrac1 =
    "1.1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numFrac2 =
    "0.999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numFracTricky1 =
    "0.1000000000000000000000000000000000000000000000000000000000000000000000000000000002";
const numFracTricky2 =
    "0.1000000000000000000000000000000000000000000000000000000000000000000000000000000001";

const short = "2";

Deno.bench("big int v2", () => {
    subV2(numLong1, numLong2);
});

Deno.bench("big int v1", () => {
    subV1(numLong1, numLong2);
});

// ---------------------------------------

Deno.bench("long frac subV2", () => {
    subV2(numFrac1, numFrac2);
});

Deno.bench("long frac subV1", () => {
    subV1(numFrac1, numFrac2);
});

// ---------------------------------------

Deno.bench("long frac tricky subV2", () => {
    subV2(numFracTricky1, numFracTricky2);
});

Deno.bench("long frac tricky subV1", () => {
    subV1(numFracTricky1, numFracTricky2);
});

// ---------------------------------------

Deno.bench("numLong1 - short subV2", () => {
    subV2(numLong1, short);
});

Deno.bench("numLong1 - short subV1", () => {
    subV1(numLong1, short);
});

// ---------------------------------------

Deno.bench("short - numFracTricky1 subV2", () => {
    subV2(short, numFracTricky1);
});

Deno.bench("short - numFracTricky1 subV1", () => {
    subV1(short, numFracTricky1);
});


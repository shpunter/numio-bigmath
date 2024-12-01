import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { subV1 } from "../../v1/index.ts";
import { subV2 } from "../index.ts";

const numLong1NoCarry =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const numLong2NoCarry =
    "33333333333333333333333333333333333333333333333333333333333333333333333333333333";

const numLong1HasCarry =
    "1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numLong2HasCarry =
    "999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numFrac1HasCarry =
    "1.1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
const numFrac2HasCarry =
    "0.999999999999999999999999999999999999999999999999999999999999999999999999999999999";

const numFrac1HasNoCarry =
    "1.99999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const numFrac2HasNoCarry =
    "0.11111111111111111111111111111111111111111111111111111111111111111111111111111111111";

const numFracTricky1 =
    "0.1000000000000000000000000000000000000000000000000000000000000000000000000000000002";
const numFracTricky2 =
    "0.1000000000000000000000000000000000000000000000000000000000000000000000000000000001";

const short = "1";

Deno.bench("big int no carry v2", () => {
    subV2(numLong1NoCarry, numLong2NoCarry);
});

Deno.bench("big int no carry  v1", () => {
    subV1(numLong1NoCarry, numLong2NoCarry);
});

Deno.bench("big int no carry  Bigjs", () => {
    const x = new Big(numLong2NoCarry);
    const y = numLong2NoCarry;
    x.minus(y);
});

// -----------------------------------------
Deno.bench("big int has carry v2", () => {
    subV2(numLong1HasCarry, numLong2HasCarry);
});

Deno.bench("big int has carry v1", () => {
    subV1(numLong1HasCarry, numLong2HasCarry);
});

Deno.bench("big int has carry Bigjs", () => {
    const x = new Big(numLong1HasCarry);
    const y = numLong2HasCarry;
    x.minus(y);
});

// ---------------------------------------

Deno.bench("long frac has carry subV2", () => {
    subV2(numFrac1HasCarry, numFrac2HasCarry);
});

Deno.bench("long frac has carry subV1", () => {
    subV1(numFrac1HasCarry, numFrac2HasCarry);
});

Deno.bench("long frac has carry Bigjs", () => {
    const x = new Big(numFrac1HasCarry);
    const y = numFrac2HasCarry;
    x.minus(y);
});

// ---------------------------------------

Deno.bench("long frac tricky subV2", () => {
    subV2(numFracTricky1, numFracTricky2);
});

Deno.bench("long frac tricky subV1", () => {
    subV1(numFracTricky1, numFracTricky2);
});

Deno.bench("long frac tricky Bigjs", () => {
    const x = new Big(numFracTricky1);
    const y = numFracTricky2;
    x.minus(y);
});

// ---------------------------------------

Deno.bench("numLong1HasCarry - short subV2", () => {
    subV2(numLong1HasCarry, short);
});

Deno.bench("numLong1HasCarry - short subV1", () => {
    subV1(numLong1HasCarry, short);
});

Deno.bench("numLong1HasCarry - short Bigjs", () => {
    const x = new Big(numLong1HasCarry);
    const y = short;
    x.minus(y);
});

// ---------------------------------------
Deno.bench("numLong1HasNoCarry subV2", () => {
    subV2(numFrac1HasNoCarry, numFrac2HasNoCarry);
});

Deno.bench("numLong1HasNoCarry subV1", () => {
    subV1(numFrac1HasNoCarry, numFrac2HasNoCarry);
});

Deno.bench("numLong1HasNoCarry Bigjs", () => {
    const x = new Big(numFrac1HasNoCarry);
    const y = numFrac2HasNoCarry;
    x.minus(y);
});

// ---------------------------------------

Deno.bench("short - numFracTricky1 subV2", () => {
    subV2(short, numFracTricky1);
});

Deno.bench("short - numFracTricky1 subV1", () => {
    subV1(short, numFracTricky1);
});

Deno.bench("short - numFracTricky1 Bigjs", () => {
    const x = new Big(short);
    const y = numFracTricky1;
    x.minus(y);
});

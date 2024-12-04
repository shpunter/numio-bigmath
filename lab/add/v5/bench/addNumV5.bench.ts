import { addV5 } from "../index.ts";
import { addV4 } from "../../v4/index.ts";

const num1 = "999999999999999999999999999999999999999999999999999999999999999999999999";
const num2 = "111111111111111111111111111111111111111111111111111111111111111111111111";
const short = "1";

const small1 = "9.99999999999999999999999999999999999999999999999999999999999999999999999";
const small2 = "1.11111111111111111111111111111111111111111111111111111111111111111111111";

const tricky1 = "0.10000000000000000000000000000000000000000000000000000000000000000000001";
const tricky2 = "0.10000000000000000000000000000000000000000000000000000000000000000000001";


Deno.bench("long addV4", () => {
    addV4(num1, num2);
});

Deno.bench("long addV5", () => {
    addV5(num1, num2);
});


Deno.bench("short addV4", () => {
    addV4(num1, short);
});

Deno.bench("short addV5", () => {
    addV5(num1, short);
});

Deno.bench("small addV4", () => {
    addV4(small1, small2);
});

Deno.bench("small addV5", () => {
    addV5(small1, small2);
});

Deno.bench("tricky addV4", () => {
    addV4(tricky1, tricky2);
});

Deno.bench("tricky addV5", () => {
    addV5(tricky1, tricky2);
});

import { add } from "../index.ts";
import Big from 'https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs';
const num1 = "99999999999999999999999999999999999";
const num2 = "5555555555555555555555555555555";

Deno.bench("infinite-numbers", () => {
  const tt = add(num1, num2);
  add(tt, num1);
});

Deno.bench("infinite-numbers", () => {
  const x = new Big(num1);
  const y = Big(num2).add(x).add(x);
  // console.log(y);
});

import { add } from "./add/index.ts";
import { mul } from "./mul/index.ts";
import { sub } from "./sub/index.ts";

export { add, mul, sub };

console.log(mul("0.00000000000000000000000000000000000000000000000000000000000000000009",
   "0.000000002"));
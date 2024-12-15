import { addV5 } from "../lab/add/v5/index.ts";
import { mulV1 } from "../lab/mul/v1/index.ts";
import { subV2 } from "../lab/sub/v2/index.ts";

export const add = addV5;
export const sub = subV2;
export const mul = mulV1;

// example
console.log("3 - 1.1 =", sub("3", "1.1"));
console.log("3 + 1.1 =", add("3", "1.1"));
console.log("3 * 1.1 =", mul("3", "1.1"));
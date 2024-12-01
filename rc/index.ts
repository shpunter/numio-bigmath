import { addV4 } from "../lab/add/v4/index.ts";
import { subV2 } from "../lab/sub/v2/index.ts";

export const add = addV4;
export const subNum = subV2;

// example
console.log(subNum("3", "1.1"));
console.log(add("3", "1.1"));
import { sub } from "./sub/index.ts";
import { mul } from "./mul/index.ts";
import { add } from "./add/index.ts";

// example
console.log("3 - 1.1 =", sub("3", "1.1"));
console.log("3 + 1.1 =", add("3", "1.1"));
console.log("3 * 1.1 =", mul("3", "1.1"));

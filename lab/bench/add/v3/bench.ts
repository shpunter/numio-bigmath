import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";
import { addNumV1 } from "../../../add/addNumV1/index.ts";
import { addNumV2 } from "../../../add/addNumV2/index.ts";
import { addNumV3 } from "../../../add/addNumV3/index.ts";

const num1 =
    "999999999999999999999999999999999999999999999999999999999999999";
const num2 =
    "111111111111111111111111111111111111111111111111111111111111111";

// Deno.bench("chatCodeAt", () => {
//     const arr1: number[] = Array(num1.length);
//     const arr2: number[] = Array(num2.length);

//     for (let i = 0; i < num1.length; i++) {
//         arr1[i] = num1.charCodeAt(i);
//     }

//     for (let i = 0; i < num1.length; i++) {
//         arr2[i] = num2.charCodeAt(i);
//     }
// });

// Deno.bench("create string", () => {
//     let arr1 = "";
//     let arr2 = "";

//     for (let i = 0; i < num1.length; i++) {
//         arr1 += num1[i];
//     }

//     for (let i = 0; i < num1.length; i++) {
//         arr2 += num2[i];
//     }
// });

// Deno.bench("convert string to int", () => {
//     const arr1: number[] = Array(num1.length);
//     const arr2: number[] = Array(num2.length);

//     for (let i = 0; i < num1.length; i++) {
//         arr1[i] = +num1[i];
//     }

//     for (let i = 0; i < num1.length; i++) {
//         arr2[i] = +num2[i];
//     }
// });

// Deno.bench("Int8Array", () => {
//     const arr1 = new Int8Array(num1.length);
//     const arr2 = new Int8Array(num1.length);

//     for (let i = 0; i < num1.length; i++) {
//         arr1[i] = +num1[i];
//     }

//     for (let i = 0; i < num1.length; i++) {
//         arr2[i] = +num2[i];
//     }
// });


Deno.bench("addNumV3", () => {
    const sum = addNumV3(num1, num2);
});


Deno.bench("addNumV2", () => {
    const sum = addNumV2(num1, num2);
});

Deno.bench("addNumV1", () => {
    const sum = addNumV1(num1, num2);
});

Deno.bench("big.js", () => {
	const x = new Big(num1);
	const y = new Big(num2);
	const res = x.plus(y);
});
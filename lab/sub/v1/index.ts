import { splitFn } from "../../add/addNumV4/utils.ts";
import { subFracPart, subIntPart } from "./utils.ts";

export const subV1 = (num1: string, num2: string) => {
    const [int1, frac1] = splitFn(num1);
    const [int2, frac2] = splitFn(num2);
    const resultInt = subIntPart(int1, int2);
    const resultFrac = subFracPart(frac1, frac2);


    // return String.fromCharCode(...resultInt)

    let str = "";

    for (let i = 0; i < resultInt.length; i++) {
        str += resultInt[i];
    }

    resultFrac.length && (str += ".");

    for (let i = 0; i < resultFrac.length; i++) {
        str += resultFrac[i];
    }

    return str;
};



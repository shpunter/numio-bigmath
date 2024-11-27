import { splitFn } from "../../add/addNumV4/utils.ts";
import { getBigger } from "./utils.ts";

export const subV1 = (num1: string, num2: string) => {
    const [int1, frac1] = splitFn(num1);
    const [int2, frac2] = splitFn(num2);
};


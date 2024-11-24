import { addIntPart } from "./utils.ts";

export const addNumV3 = (num1: string, num2: string) => {
    const result = addIntPart(num1, num2);     
    let str = "";

    for (let i = 0; i < result.length; i++) {
        str = result[i] + str;
    }

    return str;
};

import { addIntPart } from "./utils.ts";

export const addNumV4 = (num1: string, num2: string) => {
    const [result, carryOver] = addIntPart(num1, num2);
    let str = "";

    for (let i = 0; i < result.length; i++) {
        str += result[i];
    }

    return carryOver ? "1" + str : str;
    // return [str, carryOver];
};

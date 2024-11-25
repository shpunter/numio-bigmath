import { addIntPart } from "./utils.ts";

export const addNumV4 = (num1: string, num2: string) => {
    const [_num1, _num2] = num1.length > num2.length
        ? [num1, num2]
        : [num2, num1];

    const { length } = _num1;
    const array = Array(length);

    for (let i = 0; i < length; i++) {
        array[i] = _num1.charCodeAt(i) - 48;
    }

    const [result, carryOver] = addIntPart(array, _num2);
    let str = "";

    for (let i = 0; i < result.length; i++) {
        str += result[i];
    }

    return carryOver ? "1" + str : str;
    // return [str, carryOver];
};

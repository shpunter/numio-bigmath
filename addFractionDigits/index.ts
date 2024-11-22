import { addIntegerDigits } from "../addIntegerDigits/index.ts";

export const checkFractionLength = (num1: string, num2: string) => {
    const { length: len1 } = num1;
    const { length: len2 } = num2;
    let [numToModify, num] = len1 < len2 ? [num1, num2] : [num2, num1];

    for (let i = 0; i < Math.abs(len1 - len2); i++) {
        numToModify += "0";
    }

    return [numToModify, num];
};

export const addFractionDigits = (num1: string = "", num2: string = "") => {
    const [_num1, _num2] = checkFractionLength(num1, num2);

    return addIntegerDigits(_num1, _num2);
};

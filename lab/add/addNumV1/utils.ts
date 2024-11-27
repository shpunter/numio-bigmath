import type { AddIntegerPart, CalcNext, GetSum, CheckFractionLength } from "./utils.type.ts";

export const getSum: GetSum = (digit1, digit2) => digit1 - (10 - digit2);

export const calcNext: CalcNext = (digit2, digit1, inc) => {
    if (digit2 + digit1 > 9) return [getSum(digit2, digit1) + inc, 1];
    if (digit2 + digit1 + inc >= 10) return [getSum(digit2, digit1 + inc), 1];

    return [digit2 + digit1 + inc, 0];
};

export const addIntegerPart: AddIntegerPart = (num1, num2) => {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let incNext = 0;
    let result = "";

    while (p1 >= 0 || p2 >= 0) {
        const digit1 = p1 >= 0 ? +num1[p1] : 0;
        const digit2 = p2 >= 0 ? +num2[p2] : 0;
        const [next, _incNext] = calcNext(digit2, digit1, incNext);

        incNext = _incNext;
        result = next + result;

        p1 > -1 && (p1 -= 1);
        p2 > -1 && (p2 -= 1);
    }

    return [result, incNext ? "1" : ""];
};

export const checkFractionLength: CheckFractionLength = (num1, num2) => {
    const { length: len1 } = num1;
    const { length: len2 } = num2;
    let [numToModify, num] = len1 < len2 ? [num1, num2] : [num2, num1];

    for (let i = 0; i < Math.abs(len1 - len2); i++) {
        numToModify += "0";
    }

    return [numToModify, num];
};

export const addFractionPart = (num1 = "", num2 = "") => {
    const [_num1, _num2] = checkFractionLength(num1, num2);

    return addIntegerPart(_num1, _num2);
};

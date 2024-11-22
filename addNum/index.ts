import { addFractionDigits } from "../addFractionDigits/index.ts";
import { addIntegerDigits } from "../addIntegerDigits/index.ts";

export const addNum = (num1: string, num2: string) => {
    const [int1, frac1] = num1.split(".");
    const [int2, frac2] = num2.split(".");
    const [sumFrac, incNextFrac] = addFractionDigits(frac1, frac2);
    const [sumInt, incNextInt] = addIntegerDigits(int1, int2);

    return `${addIntegerDigits(`${incNextInt}${sumInt}`, incNextFrac)}.${sumFrac}`;
};

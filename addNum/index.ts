import { addFractionDigits } from "../addFractionDigits/index.ts";
import { addIntegerDigits } from "../addIntegerDigits/index.ts";

export const addNum = (num1: string, num2: string) => {
    const [int1, frac1] = num1.split(".");
    const [int2, frac2] = num2.split(".");
    const [sumFrac, incNextFrac] = addFractionDigits(frac1, frac2);
    let [sumInt, incNextInt] = addIntegerDigits(int1, int2);

    sumInt = incNextInt + sumInt;
    sumInt = addIntegerDigits(sumInt, incNextFrac)[0]

    if (frac1 || frac2) return sumInt + "." + sumFrac;    

    return sumInt;
};

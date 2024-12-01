import { addFractionPart, addIntegerPart } from "./utils.ts";
import type { AddNum } from "./utils.type.ts";

export const addV1: AddNum = (num1, num2) => {
    const [int1, frac1] = num1.split(".");
    const [int2, frac2] = num2.split(".");
    const [sumFrac, incNextFrac] = addFractionPart(frac1, frac2);
    let [sumInt, incNextInt] = addIntegerPart(int1, int2);

    sumInt = incNextInt + sumInt;
    sumInt = addIntegerPart(sumInt, incNextFrac)[0];

    if (frac1 || frac2) return sumInt + "." + sumFrac;

    return sumInt;
};

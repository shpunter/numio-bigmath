export const addIntPart = (num1: number[], num2: number[]) => {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carryOver = 0;
    const result: number[] = [];

    while (p1 >= 0 || p2 >= 0) {
        const digit1 = num1?.[p1] ?? 0;
        const digit2 = num2?.[p2] ?? 0;
        const sum = digit1 + digit2 + carryOver;

        if (sum > 9) {
            result.push(sum % 10);
            carryOver = (sum / 10) | 0;
        } else {
            result.push(sum);
            carryOver = 0;
        }

        p1 >= 0 && (p1 -= 1);
        p2 >= 0 && (p2 -= 1);
    }

    carryOver && result.push(carryOver);

    return result;
};

export const splitFn = (num: string) => {
    const { length } = num;
    const arrInt: number[] = Array(length);
    const arrFrac: number[] = Array(0);
    let dotIdx = NaN;

    for (let i = 0; i < length; i++) {
        const charCode = num.charCodeAt(i);

        if (charCode === 46) {
            dotIdx = i;
            arrInt.length = i;
            arrFrac.length = length - i - 1;
            continue;
        }

        if (Number.isNaN(dotIdx)) {
            arrInt[i] = charCode - 48;
        } else {
            arrFrac[i - dotIdx - 1] = charCode - 48;
        }
    }

    return [arrInt, arrFrac]
};

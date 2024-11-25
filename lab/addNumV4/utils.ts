export const addIntPart = (num1: number[], num2: string) => {
    let p2 = num2.length - 1;
    let p1 = NaN;
    let carryOver = 0;
    const lenDiff = num1.length - num2.length;

    while (p2 >= 0) {
        p1 = lenDiff + p2;

        const sum = num1[p1] + (num2.charCodeAt(p2) - 48) + carryOver;

        if (sum > 9) {
            num1[p1] = sum % 10;
            carryOver = (sum / 10) | 0;
        } else {
            num1[p1] = sum;
            carryOver = 0;
        }

        p2 -= 1;
    }

    while (p1 - 1 >= 0 && carryOver) {
        const sum = num1[p1 - 1] + carryOver;

        num1[p1 - 1] = sum % 10;
        carryOver = (sum / 10) | 0;
        p1 -= 1;
    }

    return [num1, carryOver] as const;
};

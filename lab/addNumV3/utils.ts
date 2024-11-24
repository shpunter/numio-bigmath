export const addIntPart = (num1: string, num2: string) => {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carryOver = 0;
    const result: number[] = [];

    while (p1 >= 0 || p2 >= 0) {
        const digit1 = p1 < 0 ? 0 : num1.charCodeAt(p1) - 48;
        const digit2 = p2 < 0 ? 0 : num2.charCodeAt(p2) - 48;
        const sum = digit1 + digit2 + carryOver;

        if (sum > 9) {
            result.push(sum % 10);
            carryOver = (sum / 10) | 0
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

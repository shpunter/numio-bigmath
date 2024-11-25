export const addIntPart = (left: string, right: string) => {
    const [_left, _right] = left.length > right.length
        ? [left, right]
        : [right, left];

    const { length: leftLen } = _left;
    const leftAsArr: number[] = Array(leftLen);
    const lenDiff = leftAsArr.length - _right.length;

    let p2 = _right.length - 1;
    let p1 = NaN;
    let carryOver = 0;

    for (let i = 0; i < leftLen; i++) {
        leftAsArr[i] = _left.charCodeAt(i) - 48;
    }


    while (p2 >= 0) {
        p1 = lenDiff + p2;

        const sum = leftAsArr[p1] + (_right.charCodeAt(p2) - 48) + carryOver;

        if (sum > 9) {
            leftAsArr[p1] = sum % 10;
            carryOver = (sum / 10) | 0;
        } else {
            leftAsArr[p1] = sum;
            carryOver = 0;
        }

        p2 -= 1;
    }

    while (p1 - 1 >= 0 && carryOver) {
        const sum = leftAsArr[p1 - 1] + carryOver;

        leftAsArr[p1 - 1] = sum % 10;
        carryOver = (sum / 10) | 0;
        p1 -= 1;
    }

    return [leftAsArr, carryOver] as const;
};

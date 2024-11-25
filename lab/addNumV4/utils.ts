export const addIntPart = (left: number[], right: number[]) => {
    const [_left, _right] = left.length > right.length
        ? [left, right]
        : [right, left];

    const lenDiff = _left.length - _right.length;

    let p2 = _right.length - 1;
    let p1 = NaN;
    let carryOver = 0;

    while (p2 >= 0) {
        p1 = lenDiff + p2;

        const sum = _left[p1] + _right[p2] + carryOver;

        if (sum > 9) {
            _left[p1] = sum % 10;
            carryOver = (sum / 10) | 0;
        } else {
            _left[p1] = sum;
            carryOver = 0;
        }

        p2 -= 1;
    }

    while (p1 - 1 >= 0 && carryOver) {
        const sum = _left[p1 - 1] + carryOver;

        _left[p1 - 1] = sum % 10;
        carryOver = (sum / 10) | 0;
        p1 -= 1;
    }

    return [_left, carryOver] as const;
};

export const splitFn = (num: string) => {
    const { length } = num;
    const arrInt: number[] = Array(length);
    const arrFrac: number[] = Array(0);
    let dotIdx = -1;

    for (let i = 0; i < length; i++) {
        const charCode = num.charCodeAt(i);

        if (charCode === 46) {
            dotIdx = i;
            arrInt.length = i;
            arrFrac.length = length - i - 1;
            continue;
        }

        const idx = dotIdx === -1 ? i : i - dotIdx - 1;

        arrInt[idx] = charCode - 48;
    }

    return [arrInt, arrFrac];
};

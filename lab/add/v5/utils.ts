import type { Sum } from "./types.ts";

export const sum: Sum = (left, right, intLenL, intLenR) => {
    const fracLenL = left.length - intLenL;
    const fracLenR = right.length - intLenR;
    const fracMaxLen = fracLenL >= fracLenR ? fracLenL : fracLenR;
    const [_left, _right] = intLenL >= intLenR ? [left, right] : [right, left];
    let pl = (intLenL >= intLenR ? intLenL : intLenR) + fracMaxLen - 1;
    let pr = (intLenL >= intLenR ? intLenR : intLenL) + fracMaxLen - 1;
    let carryOver = 48;

    if (intLenL === _left.length && intLenR !== _right.length) _left.push(46);
    if (intLenR === _right.length && intLenL !== _left.length) _right.push(46);

    while (pr >= 0) {
        if (_left[pl] === 46 || _right[pl] === 46) {
            pr -= 1;
            pl -= 1;
        }

        const sum = ((_left[pl] ?? 48) + (_right[pr] ?? 48) + carryOver) -
            3 * 48;

        if (sum > 9) {
            _left[pl] = (sum % 10) + 48;
            carryOver = ((sum / 10) | 0) + 48;
        } else {
            _left[pl] = sum + 48;
            carryOver = 48;
        }

        pr -= 1;
        pl -= 1;
    }

    while (pl >= 0 && carryOver) {
        if (_left[pl] === 46) pl -= 1;

        const sum = (_left[pl] + carryOver) - 2 * 48;

        _left[pl] = (sum % 10) + 48;
        carryOver = ((sum / 10) | 0) + 48;
        pl -= 1;
    }

    return [_left, carryOver - 48];
};

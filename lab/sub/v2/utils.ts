export const sub = (
    left: number[],
    right: number[],
    intLenL: number,
    intLenR: number,
): number[] => {
    const lenDiff = (intLenL - intLenR) * (intLenL > intLenR ? 1 : -1);
    let [_left, _right] = intLenL >= intLenR ? [left, right] : [right, left];
    let pl = lenDiff;
    let pr = 0;
    let isSwapped = lenDiff > 0;
    let carryOver = false;

    if (intLenL === _left.length && intLenR !== _right.length) _left.push(46);
    if (intLenR === _right.length && intLenL !== _left.length) _right.push(46);

    while (pr < _right.length) {
        if (_left[pl] < 48 || _right[pr] < 48) {
            pr += 1;
            pl += 1;
        }

        let sub = ((_left[pl] ?? 48) - (_right[pr] ?? 48)) + 48;

        if (!isSwapped && _left[pl] > _right[pr]) {
            isSwapped = true;
        }

        if (!isSwapped && sub < 48 && lenDiff === 0) {
            [_left, _right] = [right, left];
            isSwapped = true;
            continue;
        }

        if (sub < 48) {
            sub += 10;
            carryOver = true;
        }

        let _pl = pl - 1;
        let _pr = pr - 1;

        while (carryOver) {
            if (_left[_pl] === 46 || _right[_pr] === 46) {
                _pl -= 1;
                _pr -= 1;
            }

            if (_left[_pl] !== 48) {
                _pl >= 0 && (_left[_pl] -= 1);
                _pr >= 0 && (_right[_pr] -= 1);

                carryOver = false;
            } else {
                _pl >= 0 && (_left[_pl] = 57);
                _pr >= 0 && (_right[_pr] = 57);
            }

            _pl -= 1;
            _pr -= 1;
        }

        _left[pl] = sub;
        _right[pr] = sub;

        pl += 1;
        pr += 1;
    }

    return _left;
};

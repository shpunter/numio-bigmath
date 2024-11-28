export const subIntPart = (left: number[], right: number[]) => {
    let [_left, _right] = left.length > right.length
        ? [left, right]
        : [right, left];

    const lenDiff = _left.length - _right.length;
    let pl = lenDiff;
    let pr = 0;
    let isSwapped = false;
    let carryOver = false;
    let shiftIdx = 1;

    while (pr < _right.length) {
        let sub = _left[pl] - _right[pr];

        if (sub < 0 && !isSwapped && lenDiff === 0) {
            [_left, _right] = [left, right];
            isSwapped = true;
            continue;
        }

        if (sub < 0) {
            sub += 10;
            carryOver = true;
        }

        while (carryOver) {
            const _pl = pl - shiftIdx;
            const _pr = pr - shiftIdx;

            if (_left[_pl] !== 0) {
                _pl >= 0 && (_left[_pl] -= 1);
                _pr >= 0 && (_right[_pr] -= 1);

                carryOver = false;
                shiftIdx = 0;
            } else {
                _left[_pl] = 9;
                _right[_pr] = 9;
            }

            shiftIdx += 1;
        }

        _left[pl] = sub;
        _right[pr] = sub;

        pl += 1;
        pr += 1;
    }

    return _left;
};

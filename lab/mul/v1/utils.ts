export const mul = (
    left: number[],
    right: number[],
    intLenL: number,
    intLenR: number,
): [number[], number] => {
    // const fracLenL = left.length - intLenL;
    // const fracLenR = right.length - intLenR;
    // const lenL = fracLenL + intLenL;
    // const lenR = fracLenR + intLenR;
    const [_left, _right] = intLenL >= intLenR ? [left, right] : [right, left];
    const result: number[] = Array(_right.length * 2 - 1);
    
    for (let i = _right.length - 1; i >= 0; i--) {
        for (let j = _left.length - 1; j >= 0; j--) {
            const idx = j + i;
            
            result[idx] = (result[idx] ?? 0) +
            (_left[j] - 48) * (_right[i] - 48);
        }
    }
    
    let carryOver = 0;
    let idx = result.length - 1;

    while (idx >= 0) {
        const curr = result[idx] ?? 0;
        const next = (curr+ carryOver) % 10;

        carryOver = (carryOver + curr) / 10 | 0;
        result[idx] = next + 48;
        idx -= 1;
    }

    return [result, carryOver ? carryOver + 48 : 0];
};

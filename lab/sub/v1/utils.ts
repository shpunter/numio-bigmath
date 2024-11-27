export const subFracPart = (left: number[], right: number[]) => {


    // return [_left, carryOver] as const;
}

export const getBigger = (
    [leftInt, leftFrac]: Num,
    [rightInt, rightFrac]: Num,
) => {
    const option1 = [[leftInt, leftFrac], [rightInt, rightFrac]];
    const option2 = [[rightInt, rightFrac], [leftInt, leftFrac]];

    if (leftInt.length > rightInt.length) return option1;
    if (leftInt.length < rightInt.length) return option2;

    for (let i = 0; i < leftInt.length; i++) {
        if (leftInt[i] === rightInt[i]) continue;
        if (leftInt[i] > rightInt[i]) return option1;

        return option2;
    }

    const len = leftFrac.length > rightFrac.length
        ? leftFrac.length
        : rightFrac.length;

    for (let i = 0; i < len; i++) {
        if (i >= leftFrac.length) return option2;
        if (i >= rightFrac.length) return option1;
        if (leftFrac[i] === rightFrac[i]) continue;
        if (leftFrac[i] > rightFrac[i]) return option1;

        return option2;
    }

    return option1;
};

type Num = number[][];//[number[], number[]];

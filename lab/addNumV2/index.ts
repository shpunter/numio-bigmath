export const chop = (str: string, length: number = 15) => {
    const chunks: number[] = [];
    let p = str.length - length;

    while (p >= 0) {
        const chunk = str.slice(p, p + length);

        chunk && chunks.push(+chunk);
        p -= length;
    }

    p < 0 && chunks.push(+str.slice(0, Math.abs(p)));

    return chunks;
};

export const getLengthOfNum = (num: number) => Math.ceil(Math.log10(num + 1));

export const addChunks = (remembered: number, chunks: number[]) => {
    const sum = chunks.reduce((acc, target) => acc + target, remembered);
    const maxNumLen = getLengthOfNum(chunks[chunks.length-1]);
    const sumLen = getLengthOfNum(sum);

    if (sumLen > maxNumLen) { 
        const splitter = Math.pow(10, sumLen - 1);

        return [Math.floor((sum / splitter)), sum % splitter];
    }

    return [0, sum];
};

export const addNumV2 = (num1: string, num2: string) => {
    const chunks1 = chop(num1);
    const chunks2 = chop(num2);
    const [arr1, arr2] = chunks1.length > chunks2.length
        ? [chunks1, chunks2]
        : [chunks2, chunks1];

    let idx = 0;
    let result = "";
    let remembered = 0;

    while (idx < arr1.length) {
        const [_remembered, _chunk] = addChunks(remembered, [arr1[idx], arr2?.[idx] ?? 0]);

        remembered = _remembered;
        result = _chunk + result;
        idx += 1;
    }
    
    return remembered ? remembered + result : result;
};


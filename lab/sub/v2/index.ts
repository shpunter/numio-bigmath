import { sub } from "./utils.ts";

export const subV2 = (left: string, right: string) => {
    let intLenL = left.length;
    let intLenR = right.length;
    const arrL: number[] = Array(left.length);
    const arrR: number[] = Array(right.length);

    for (let i = 0; i < left.length; i++) {
        const charCode = left.charCodeAt(i);

        if (charCode === 46) intLenL = i;        

        arrL[i] = charCode;
    }

    for (let i = 0; i < right.length; i++) {
        const charCode = right.charCodeAt(i);

        if (charCode === 46) intLenR = i;
        
        arrR[i] = charCode;
    }

    const result = sub(arrL, arrR, intLenL, intLenR);

    return String.fromCharCode(...result)
};


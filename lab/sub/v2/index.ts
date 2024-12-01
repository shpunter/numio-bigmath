import { sub } from "./utils.ts";

export const subV2 = (left: string, right: string) => {
    let intLenL = left.length;
    let intLenR = right.length;
    const arrL: number[] = Array(left.length);
    const arrR: number[] = Array(right.length);

    for (let i = 0; i < left.length; i++) {
        const charCode = left.charCodeAt(i);

        if (charCode === 46) intLenL = i;        

        arrL[i] = charCode - 48;
    }

    for (let i = 0; i < right.length; i++) {
        const charCode = right.charCodeAt(i);

        if (charCode === 46) intLenR = i;
        
        arrR[i] = charCode - 48;
    }

    const result = sub(arrL, arrR, intLenL, intLenR);
    // return String.fromCharCode(...result)
    let str = "";
    for (let i = 0; i < result.length; i++) {
        const charCode = result[i] === 46 ? 46 : result[i] + 48;
        str += String.fromCharCode(charCode);
    }

    return str;
};

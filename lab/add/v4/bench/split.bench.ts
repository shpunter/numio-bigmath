const num = "111111111111111111111111111111111111111111111111111111111111.000000000000000000000000000000000000000000000000000009";

Deno.bench("isNaN", () => {
    const splitFn = (num: string) => {
        const { length } = num;
        const arrInt: number[] = Array(length);
        const arrFrac: number[] = Array(0);
        let dotIdx = NaN;
    
        for (let i = 0; i < length; i++) {
            const charCode = num.charCodeAt(i);
    
            if (charCode === 46) {
                dotIdx = i;
                arrInt.length = i;
                arrFrac.length = length - i - 1;
                continue;
            }
    
            if (Number.isNaN(dotIdx)) {
                arrInt[i] = charCode - 48;
            } else {
                arrFrac[i - dotIdx - 1] = charCode - 48;
            }
        }
    
        return [arrInt, arrFrac];
    }

    splitFn(num);
})

Deno.bench("-1", () => {
    const splitFn = (num: string) => {
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
    
            if (dotIdx === -1) {
                arrInt[i] = charCode - 48;
            } else {
                arrFrac[i - dotIdx - 1] = charCode - 48;
            }
        }
    
        return [arrInt, arrFrac];
    }

    splitFn(num);
})
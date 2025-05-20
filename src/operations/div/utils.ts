import { tryBigInt } from "../../shared/utils.ts";
import type { DivInner } from "./types.ts";

export const divInner: DivInner = (array, precision, def) => {
  let bigInt = def ? def[0] : array[0][0];
  let fpe = def ? def[1] : array[0][1];
  const isNeg = bigInt < 0n;

  for (let i = def ? 0 : 1; i < array.length; i++) {
    let [bigCurrent, dpLen] = array[i];
    let r = 0n;

    if (bigInt === 0n && fpe === 0) return [0n, 0];

    if (fpe === dpLen) {
      fpe = 0;
      dpLen = 0;
    }
    
    if (dpLen > 0 && fpe < dpLen) {
      bigInt *= 10n ** tryBigInt(dpLen - fpe);
      fpe = 0;
    }
    
    if (dpLen > 0 && fpe > dpLen) fpe = fpe - dpLen;

    while ((bigInt < 0 ? bigInt * -1n : bigInt) < bigCurrent) {
      if (precision <= fpe) return [bigInt / bigCurrent, fpe];
      
      fpe += 1;
      bigInt *= 10n;
    }
    const q = bigInt / bigCurrent;
    r = bigInt - q * bigCurrent;
    bigInt = q;

    while ((isNeg ? r < 0n: r > 0n) && fpe < precision) {
      const nextBigInt = r * 10n;
      const nextQ = nextBigInt / bigCurrent;
      const nextRemained = nextBigInt - nextQ * bigCurrent;
      bigInt = bigInt * 10n + nextQ;
      r = nextRemained;
      fpe += 1;
    }
  }

  return [bigInt, fpe];
};

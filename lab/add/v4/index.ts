import { addFracPart, addIntPart, splitFn } from "./utils.ts";

export const addV4 = (num1: string, num2: string) => {
  const [int1, frac1] = splitFn(num1);
  const [int2, frac2] = splitFn(num2);

  const [resultFrac, carryOverFrac] = addFracPart(frac1, frac2);
  int2[int2.length - 1] += carryOverFrac;
  const [resultInt, carryOverInt] = addIntPart(int1, int2);

  let str = "";

  for (let i = 0; i < resultInt.length; i++) {
    str += resultInt[i];
  }

  resultFrac.length && (str += ".");

  for (let i = 0; i < resultFrac.length; i++) {
    str += resultFrac[i];
  }

  return carryOverInt ? carryOverInt + str : str;
};

console.log(addV4("0.1", "0.9"));

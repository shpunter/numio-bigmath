import { CalcNext, GetSum } from "./index.type.ts";

export const getSum: GetSum = (digit1, digit2) => digit1 - (10 - digit2);

export const calcNext: CalcNext = (digit2, digit1, inc) => {
	if (digit2 + digit1 > 9) return [getSum(digit2, digit1) + inc, 1];
	if (digit2 + digit1 + inc >= 10) return [getSum(digit2, digit1 + inc), 1];

	return [digit2 + digit1 + inc, 0];
};

export const add = (num1: string, num2: string) => {
	let p1 = num1.length - 1;
	let p2 = num2.length - 1;
	let incNext = 0;
	let result = "";

	while (p1 >= 0 || p2 >= 0) {
		const digit1 = p1 >= 0 ? +num1[p1] : 0;
		const digit2 = p2 >= 0 ? +num2[p2] : 0;
		const [next, _incNext] = calcNext(digit2, digit1, incNext);

		incNext = _incNext;
		result = next + result;

		p1 > -1 && (p1 -= 1);
		p2 > -1 && (p2 -= 1);
	}

	return incNext ? `1${result}` : result;
};

import Big from "https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs";

Deno.bench("add", () => {
	const num1 = 10000000000000000000000000200000000123123123123123;
	const num2 = 111110908098081789182387864589709111333444555;

	const res = num1 + num1;
});


Deno.bench("convert into arrays", () => {
	const num1 = "10000000000000000000000000200000000123123123123123";
	const num2 = "111110908098081789182387864589709111333444555";

	const map: Record<string, number> = {
		0: 9,
		1: 8,
		2: 7,
		3: 6,
		4: 5,
		5: 4,
		6: 3,
		7: 2,
		8: 1,
		9: 0,
	};

	const arr1 = num1.split("");
	const arr2 = num2.split("");
	let p1 = arr1.length - 1;
	let p2 = arr2.length - 1;

	const getSumDigit = (digit1: number, digit2: number) => {
		return digit1 - (10 - digit2);
	};

	let result = "";
	let isIncNext = false;

	while (p1 >= 0 || p2 >= 0) {
		const digit1 = p1 >= 0 ? +arr1[p1] : 0;
		const digit2 = p2 >= 0 ? +arr2[p2] : 0;
		const inc = isIncNext ? 1 : 0;
		const sum = digit1 + digit2 + inc;

		if (digit2 > map[digit1]) {
			result = getSumDigit(digit2, digit1) + inc + result;
			isIncNext = true;
		} else {
			result = sum + result;
			isIncNext = false;
		}

		if (p1 > -1) p1 -= 1;
		if (p2 > -1) p2 -= 1;
	}
});

Deno.bench("add strings create new string", () => {
	const num1 = "10000000000000000000000000200000000123123123123123";
	const num2 = "111110908098081789182387864589709111333444555";

	let p1 = num1.length - 1;
	let p2 = num2.length - 1;
	let isIncNext = false;
	let result = "";

	const map: Record<string, number> = {
		0: 9,
		1: 8,
		2: 7,
		3: 6,
		4: 5,
		5: 4,
		6: 3,
		7: 2,
		8: 1,
		9: 0,
	};

	const getSumDigit = (digit1: number, digit2: number) => {
		return digit1 - (10 - digit2);
	};

	while (p1 >= 0 || p2 >= 0) {
		const digit1 = p1 >= 0 ? +num1[p1] : 0;
		const digit2 = p2 >= 0 ? +num2[p2] : 0;
		const inc = isIncNext ? 1 : 0;
		const sum = digit1 + digit2 + inc;

		if (digit2 > map[digit1]) {
			result = getSumDigit(digit2, digit1) + inc + result;
			isIncNext = true;
		} else {
			result = sum + result;
			isIncNext = false;
		}

		if (p1 > -1) p1 -= 1;
		if (p2 > -1) p2 -= 1;
	}
});

Deno.bench("add strings create new string remove map", () => {
	const num1 = "10000000000000000000000000200000000123123123123123";
	const num2 = "111110908098081789182387864589709111333444555";

	let p1 = num1.length - 1;
	let p2 = num2.length - 1;
	let isIncNext = false;
	let result = "";

	const getSumDigit = (digit1: number, digit2: number) => {
		return digit1 - (10 - digit2);
	};

	while (p1 >= 0 || p2 >= 0) {
		const digit1 = p1 >= 0 ? +num1[p1] : 0;
		const digit2 = p2 >= 0 ? +num2[p2] : 0;
		const inc = isIncNext ? 1 : 0;
		const sum = digit1 + digit2 + inc;

		if (digit2 + digit1 > 9) {
			result = getSumDigit(digit2, digit1) + inc + result;
			isIncNext = true;
		} else {
			result = sum + result;
			isIncNext = false;
		}

		if (p1 > -1) p1 -= 1;
		if (p2 > -1) p2 -= 1;
	}
});

Deno.bench("add strings create new string remove num conversion", () => {
	const num1 = "10000000000000000000000000200000000123123123123123";
	const num2 = "111110908098081789182387864589709111333444555";

	let p1 = num1.length - 1;
	let p2 = num2.length - 1;
	let isIncNext = false;
	let result = "";

	const map: Record<string, number> = {
		0: 9,
		1: 8,
		2: 7,
		3: 6,
		4: 5,
		5: 4,
		6: 3,
		7: 2,
		8: 1,
		9: 0,
	};

	const map2: Record<string, number> = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
	};

	const getSumDigit = (digit1: number, digit2: number) => {
		return digit1 - (10 - digit2);
	};

	while (p1 >= 0 || p2 >= 0) {
		const digit1 = p1 >= 0 ? map2[num1[p1]] : 0;
		const digit2 = p2 >= 0 ? map2[num2[p2]] : 0;
		const inc = isIncNext ? 1 : 0;
		const sum = digit1 + digit2 + inc;

		if (digit2 > map[digit1]) {
			result = getSumDigit(digit2, digit1) + inc + result;
			isIncNext = true;
		} else {
			result = sum + result;
			isIncNext = false;
		}

		if (p1 > -1) p1 -= 1;
		if (p2 > -1) p2 -= 1;
	}
});

Deno.bench("add using big.js", () => {
	const x = new Big("100000000000000000000000002000000001231231231231231");
	const y = new Big("1111109080980817891823878645897091113334445559");
	const res = x.plus(y);
});

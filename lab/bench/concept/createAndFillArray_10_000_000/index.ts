const length = 10_000_000;

// Deno.bench("map for", () => {
// 	const map: Map<number, number> = new Map([]);

// 	for (let i = 0; i < length; i++) {
// 		map.set(i, i);
// 	}
// });

// Deno.bench("set for", () => {
// 	const set: Set<number> = new Set([]);

// 	for (let i = 0; i < length; i++) {
// 		set.add(i);
// 	}
// });

Deno.bench("for push", () => {
	const array: number[] = [];

	for (let i = 0; i < length; i++) {
		array.push(i);
	}
});

Deno.bench("Array fill map", () => {
	const array = Array(length).fill(null);

	array.fill(null).map((_, i) => i);
});

Deno.bench("forEach", () => {
	const array = Array(length).fill(null);

	array.forEach((_, i) => {
		array[i] = i;
	});
});

Deno.bench("Array while", () => {
	const array = Array(length).fill(null);
	let i = 0;

	while (i < length) {
		array[i] = i;
		i += 1;
	}
});

Deno.bench("Array new, loop +=", () => {
	const array = new Array(length);
	let i = 0;

	while (i < length) {
		array[i] = i;
		i += 1;
	}
});

Deno.bench("Array new, loop ++", () => {
	const array = new Array(length);
	let i = 0;

	while (i < length) {
		array[i] = i;
		i ++;
	}
});

Deno.bench("Array while push", () => {
	const array = [];
	let i = 0;

	while (i < length) {
		array.push(i);
		i += 1;
	}
});



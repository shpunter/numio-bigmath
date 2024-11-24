const length = 100_000_000;

// error: RangeError: Map maximum size exceeded
// Deno.bench("map for", () => {
// 	const map: Map<number, number> = new Map([]);

// 	for (let i = 0; i < length; i++) {
// 		map.set(i, i);
// 	}
// });

// error: RangeError: Set maximum size exceeded
// Deno.bench("set for", () => {
// 	const set: Set<number> = new Set([]);

// 	for (let i = 0; i < length; i++) {
// 		set.add(i);
// 	}
// });

// 1.4s
Deno.bench("for push", () => {
	const array: number[] = [];

	for (let i = 0; i < length; i++) {
		array.push(i);
	}
});

// Fatal JavaScript out of memory: Reached heap limit
// Deno.bench("Array fill map", () => {
// 	const array = Array(length).fill(null);

// 	array.fill(null).map((_, i) => i);
// });

// Fatal JavaScript out of memory: Reached heap limit
// Deno.bench("forEach", () => {
// 	const array = Array(length).fill(null);

// 	array.forEach((_, i) => {
// 		array[i] = i;
// 	});
// });

// Fatal JavaScript out of memory: Reached heap limit
// Deno.bench("Array while", () => {
// 	const array = Array(length).fill(null);
// 	let i = 0;

// 	while (i < length) {
// 		array[i] = i;
// 		i += 1;
// 	}
// });

// 1.4s
Deno.bench("Array while push", () => {
	const array = [];
	let i = 0;

	while (i < length) {
		array.push(i);
		i += 1;
	}
});



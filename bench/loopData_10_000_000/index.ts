const array: number[] = [];
const arrayPairs: [number, number][] = [];
let i = 0;
const length = 10_000_000;

while (i < length) {
	array.push(i);
	arrayPairs.push([i, i]);
	i += 1;
}

const set = new Set(array);
const map = new Map(arrayPairs);

Deno.bench("array loop 'for'", () => {
	for (let i = 0; i < length; i++) {
		array[i];
	}
});

Deno.bench("array loop forEach", () => {
	array.forEach((el) => {
		el;
	});
});

Deno.bench("array loop while", () => {
	let idx = 0;

	while (idx < length) {
		array[i];
		idx += 1;
	}
});

Deno.bench("array loop 'for of'", () => {
	for (const el of array) {
		el;
	}
});

Deno.bench("array loop set", () => {
	const values = set.values();
    let val = values.next();

	while (!val.done) {
        val.value;
        val = values.next();
    }
});

Deno.bench("array loop map", () => {
	const values = map.values();
    let val = values.next();

	while (!val.done) {
        val.value;
        val = values.next();
    }
});

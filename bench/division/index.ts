const num = 100_000_000;
Deno.bench("/", () => {
	num / 3;
});

Deno.bench("/", () => {
	let _num = num;
	let int = 0;
	while (_num >= 0) {
		_num = _num - 3;
		int += 1;
	}
});

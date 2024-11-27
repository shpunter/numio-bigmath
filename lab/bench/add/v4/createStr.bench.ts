const num =
    "111111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000009"
        .split("");

Deno.bench("join", () => {
    num.join("");
});

Deno.bench("loop", () => {
    let res = "";

    for (let i = 0; i < num.length; i++) {
        res += num[i];
    }
});

Deno.bench("while", () => {
    let res = "";
    let idx = 0;

    while (idx < num.length) {
        res += num[idx];
        idx += 1;
    }
});

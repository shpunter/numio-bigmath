Deno.bench("dot at the beginning => use String.split", () => {
    "1.11999999999999999999999999999999999999999999999999999999".split(".");
});

Deno.bench("dot at the beginning => find . and fill manually ", () => {
    const str = "1.11999999999999999999999999999999999999999999999999999999";
    let int = "";
    let frac = "";
    let isDotFound = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            isDotFound = true;
            continue;
        }

        isDotFound ? int += str[i] : frac += str[i];
    }
});

Deno.bench("dot at the beginning => find . and use slice ", () => {
    const str = "1.11999999999999999999999999999999999999999999999999999999";
    let int = "";
    let frac = "";
    let dotIdx = NaN;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dotIdx = i;
            break;
        }
    }

    int = str.slice(0, dotIdx);
    frac = str.slice(dotIdx + 1);
});

Deno.bench("dot at the beginning => find . and use substring ", () => {
    const str = "1.11999999999999999999999999999999999999999999999999999999";
    let int = "";
    let frac = "";
    let dotIdx = NaN;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dotIdx = i;
            break;
        }
    }

    int = str.substring(0, dotIdx);
    frac = str.substring(dotIdx + 1);
});

Deno.bench("dot at the end => use String.split", () => {
    "11199999999999999999999999999999999999999999999999999999.9".split(".");
});

Deno.bench("dot at the end => find . and fill manually ", () => {
    const str = "11199999999999999999999999999999999999999999999999999999.9";
    let int = "";
    let frac = "";
    let isDotFound = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            isDotFound = true;
            continue;
        }

        isDotFound ? int += str[i] : frac += str[i];
    }
});

Deno.bench("dot at the end => find . and use slice ", () => {
    const str = "11199999999999999999999999999999999999999999999999999999.9";
    let int = "";
    let frac = "";
    let dotIdx = NaN;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dotIdx = i;
            break;
        }
    }

    int = str.slice(0, dotIdx);
    frac = str.slice(dotIdx + 1);
});

Deno.bench("dot at the end => find . and use substring ", () => {
    const str = "11199999999999999999999999999999999999999999999999999999.9";
    let int = "";
    let frac = "";
    let dotIdx = NaN;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dotIdx = i;
            break;
        }
    }

    int = str.substring(0, dotIdx);
    frac = str.substring(dotIdx + 1);
});

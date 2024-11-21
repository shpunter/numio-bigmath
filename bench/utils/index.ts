import { addFractionDigits, checkFractionLength } from "../../addFractionDigits/index.ts";
import { addIntegerDigits } from "../../addIntegerDigits/index.ts";

Deno.bench("checkFractionLength", () => {
    checkFractionLength("1", "100000000000000000000000000000000000000")
})

Deno.bench("addIntegerDigits", () => {
    addIntegerDigits("1", "100000000000000000000000000000000000000")
})

Deno.bench("addFractionDigits", () => {
    addFractionDigits("1", "100000000000000000000000000000000000000")
})
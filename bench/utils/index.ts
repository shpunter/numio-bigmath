import { addFractionDigits, addIntegerDigits, checkFractionLength } from "../../addNum/utils.ts";

Deno.bench("checkFractionLength", () => {
    checkFractionLength("1", "100000000000000000000000000000000000000")
})

Deno.bench("addIntegerDigits", () => {
    addIntegerDigits("1", "100000000000000000000000000000000000000")
})

Deno.bench("addFractionDigits", () => {
    addFractionDigits("1", "100000000000000000000000000000000000000")
})
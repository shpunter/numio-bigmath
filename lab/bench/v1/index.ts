import { addFractionPart, addIntegerPart, checkFractionLength } from "../../addNumV1/utils.ts";

Deno.bench("checkFractionLength", () => {
    checkFractionLength("1", "100000000000000000000000000000000000000")
})

Deno.bench("addIntegerPart", () => {
    addIntegerPart("1", "100000000000000000000000000000000000000")
})

Deno.bench("addFractionPart", () => {
    addFractionPart("1", "100000000000000000000000000000000000000")
})
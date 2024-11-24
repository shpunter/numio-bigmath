export type CalcNext = (
    digit2: number,
    digit1: number,
    inc: number,
) => [number, number];

export type GetSum = (digit1: number, digit2: number) => number;
export type AddIntegerPart = (num1: string, num2: string) => [string, "1" | ""];
export type AddNum = (num1: string, num2: string) => string;
export type CheckFractionLength = (num1: string, num2: string) => [string, string];





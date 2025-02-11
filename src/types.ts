const allowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] as const

type AllowedChars = typeof allowedChars[number];
type AllowedCharsWithMinus = AllowedChars | "-";

export type Input<T> = T extends OnlyAllowedWithMinus<T> 
  ? T extends StartsWithMinus<T> ? StartsWithDot<T> : never 
  : never;

type OnlyAllowedWithMinus<T> =
    T extends ""
        ? unknown
        : T extends `${AllowedCharsWithMinus}${infer Tail}`
            ? OnlyAllowedWithMinus<Tail>
            : never

type StartsWithMinus<T> = T extends `-${infer _Right}` ? T : OnlyAllowed<T>;

type OnlyAllowed<T> =
    T extends ""
        ? unknown
        : T extends `${AllowedChars}${infer Tail}`
            ? OnlyAllowed<Tail>
            : never

type StartsWithDot<T> = T extends `.${infer _Right}` ? never : StartsWithMinusAndDot<T>;
type StartsWithMinusAndDot<T> = T extends `-.${infer _Right}` ? never : EndsWithDot<T>;
type EndsWithDot<T> = T extends `${infer _Left}.` ? never : EndsWithMinus<T>;
type EndsWithMinus<T> = T extends `${infer _Left}-` ? never : ContainsSeveralDots<T>;
type ContainsSeveralDots<T> = T extends `${infer _Left}.${infer _Middle}.${infer _Right}` ? never : ContainsSeveralMinuses<T>;
type ContainsSeveralMinuses<T> = T extends `${infer _Left}-${infer _Middle}-${infer _Right}` ? never : Empty<T>;
type Empty<T> = T extends "" ? never : T;

# @numio/bigmath

@numio/bigmath is an arbitrary-precision arithmetic library. This library
provides functions for performing arithmetic operations (addition, subtraction,
multiplication, and division) on numbers of arbitrary length. It addresses the
limitations of JavaScript's built-in number type, which suffers from precision
loss when dealing with very large or very small numbers, or numbers with more
than 15 significant digits.

## Key Features and Benefits

- **Arbitrary Precision:** Handles numbers of any length, avoiding the
  limitations of JavaScript's `Number` type. This allows for calculations with
  extremely large or small numbers without loss of precision.
- **No Precision Loss:** Eliminates precision errors that occur when using
  numeric literals with more than 15 significant digits. The library ensures
  accurate calculations even with very long numbers.
- **Four Basic Operations:** Provides functions for addition (`add`),
  subtraction (`sub`), multiplication (`mul`), and division (`div`).
- **Decimal Handling:** Correctly handles decimal numbers and performs
  calculations accurately, including scenarios involving negative numbers.
- **Division Precision Control:** The `div` function allows you to specify the
  number of digits after the decimal point for the result. The default precision
  is 20 digits.
- **Easy to Use:** The library provides simple and intuitive functions for
  performing arithmetic operations.

## How it Solves the Problem

JavaScript's `Number` type uses a 64-bit floating-point representation (IEEE
754), which can lead to precision issues when dealing with numbers that exceed
its representable range or require more than 15 significant digits. This library
likely uses a different representation internally (e.g., strings or arrays of
digits) to store and manipulate numbers, effectively bypassing the limitations
of the built-in `Number` type. This allows it to perform calculations on numbers
of virtually unlimited size and maintain accuracy.

## Use Cases

This library is particularly useful in scenarios where precise calculations with
large numbers are essential, such as:

- **Financial applications:** Dealing with large sums of money or precise
  interest calculations.
- **Scientific computing:** Working with very large or small numbers in
  scientific simulations.
- **Cryptography:** Implementing cryptographic algorithms that require high
  precision.
- **Any application** where exceeding JavaScript's number limits is a concern.

### Latest update

Added quartile functionality. When you might need it?
Understanding Distribution. Quartiles (Q1, Q2, and Q3) split a dataset into four groups, each representing 25% of the data. 
Identifying Outliers. They help visualize the shape and spread of the data, revealing whether it's skewed or symmetrical. 

# Install:

### NPM

```bash
npm install @numio/bigmath
```

### YARN

```bash
yarn add @numio/bigmath
```

### BUN

```bash
bun add @numio/bigmath
```

### PNPM

```bash
pnpm add @numio/bigmath
```

### DENO

```bash
deno add jsr:@numio/bigmath
```

# Examples:

### Add numbers

```javascript
import { add } from "@numio/bigmath";

const int = add(["12345", "99"]); // 124444
const float = add(["0.1", "0.2", "0.3"]); // 0.6
const negative = add(["0.1", "-0.3", "0.1"]); // -0.1
```

### Subtract numbers

```javascript
import { sub } from "@numio/bigmath";

const int = sub(["150", "99"]); // 51
const float = sub(["1", "0.99"]); // 0.01
const negative = sub(["-0.1", "-0.3", "0.4"]); // -0.2
```

### Multiply numbers

```javascript
import { mul } from "@numio/bigmath";

const int = mul(["15", "11", "2"]); // 330
const float = mul(["0.01", "0.99"]); // 0.0099
const negative = mul(["-2", "3"]); // -6
```

### Divide numbers

```javascript
import { div } from "@numio/bigmath";

const int = div(["9999", "33"]); //
const float = div(["0.06", "0.2"]); // 0.3
const negative = div(["-2", "-3", "2"]); // 3

// set number of digit after the decimal. By default it's 20
div("10", "3"); // 3.33333
```

### Round

```javascript
import { round } from "@numio/bigmath";

round("-1.12345"); // -1
round("1.5"); // 2
round("1.0"); // 1
round("0.00001"); // 0
round("9.9"); // 10
```

### Round at position

```javascript
import { round } from "@numio/bigmath";

round("1.12345", { decimals: 1 }); // 1.1
round("1.12345", { decimals: 2 }); // 1.12
round("1.12234", { decimals: 0 }); // 1
round("9.999", { decimals: 2 }); // 10
```

### Round modes

```javascript
import { round } from "@numio/bigmath";

round("1.11", { decimals: 1, roundMode: "up" }); // 1.2
round("1.19", { decimals: 1, roundMode: "up" }); // 1.2

round("1.11", { decimals: 1, roundMode: "down" }); // 1.1
round("1.19", { decimals: 1, roundMode: "down" }); // 1.1

round("1.15", { decimals: 1, roundMode: "half-up" }); // 1.2
round("1.15", { decimals: 1, roundMode: "half-down" }); // 1.1

round("1.15", { decimals: 1, roundMode: "half-even" }); // 1.2
round("1.25", { decimals: 1, roundMode: "half-even" }); // 1.2
round("1.35", { decimals: 1, roundMode: "half-even" }); // 1.4
round("1.45", { decimals: 1, roundMode: "half-even" }); // 1.4
round("1.55", { decimals: 1, roundMode: "half-even" }); // 1.6

round("1.15", { decimals: 1, roundMode: "half-odd" }); // 1.1
round("1.25", { decimals: 1, roundMode: "half-odd" }); // 1.3
round("1.35", { decimals: 1, roundMode: "half-odd" }); // 1.3
round("1.45", { decimals: 1, roundMode: "half-odd" }); // 1.5
round("1.55", { decimals: 1, roundMode: "half-odd" }); // 1.5
```

### Round with "significant figures" flag

```javascript
import { round } from "@numio/bigmath";

round("0.000119", { decimals: 2, sigFig: false }); // 0
round("0.000119", { decimals: 2, sigFig: true }); // 0.00012

round("0.0019", { decimals: 1, sigFig: true, roundMode: "down" }); // 0.001
round("0.0011", { decimals: 1, sigFig: true, roundMode: "up" }); // 0.002

round("1.000119", { decimals: 2, sigFig: false }); // 1
round("1.000119", { decimals: 2, sigFig: true }); // 1
```

### Pipe

```javascript
import { pipe } from "@numio/bigmath";

const addNums = ["1", "2", "3"];
const subNums = ["0.2", "0.3"];
const divNums = ["4"];
const mulNums = ["2", "5", "0.2"];

pipe.add(addNums) // 6
  .div(divNums) // 6 / 4 = 1.5 
  .sub(subNums) // 1.5 - 0.2 - 0.3 = 1
  .mul(mulNums) // 1 * 2 * 5 * 0.2 = 2
  .calc()
```

### Quartile
```javascript
import { quartile } from "@numio/bigmath";

quartile(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) // { Q1: "2.5", Q2: "5", Q3: "7.5" }
quartile(["0.001", "0.3", "0.4", "1"]) // { Q1: "0.1505", Q2: "0.35", Q3: "0.7" }

```


Does not have a limitation on the number of digits. You can use any length you'd
like

```javascript
// NO precision loss using numeric literals with more than 15 significant digits.
const int = sub(
  "999999999999999999999999999999999999999999999999999999999999999",
  "2",
); // "1000000000000000000000000000000000000000000000000000000000000001"

const float = mul(
  "0.00000000000000000000000000000000000000000000000000000000000000000009",
  "0.000000002",
); // 0.00000000000000000000000000000000000000000000000000000000000000000000000000018
```

Download from NPM - https://www.npmjs.com/package/@numio/bigmath\
Download from JSR - https://jsr.io/@numio/bigmath\
Home page - https://github.com/shpunter/numio-bigmath/blob/main/README.md\
License - https://github.com/shpunter/numio-bigmath/blob/main/LICENSE

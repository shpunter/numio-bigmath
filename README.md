# @numio/bigmath: Precise Arithmetic Beyond JavaScript's Limits

**Do you struggle with inaccurate calculations involving very large or very small numbers, or decimal numbers with high precision in JavaScript?**

`@numio/bigmath` is your solution! This library provides a robust set of functions for performing **arbitrary-precision arithmetic**, effectively overcoming the limitations of JavaScript's built-in `Number` type. Say goodbye to unexpected rounding errors and precision loss when dealing with numbers that exceed 15 significant digits or involve complex decimal operations.

## Why Choose @numio/bigmath?

**Solve Precision Problems:**

* **Handle Numbers of Any Size:** Perform calculations on integers and decimals of virtually unlimited length, without the risk of JavaScript's `Number` limitations.
* **Eliminate Precision Loss:** Achieve accurate results even with numeric literals exceeding 15 significant digits, ensuring the integrity of your calculations.
* **Precise Decimal Operations:** Execute addition, subtraction, multiplication, and division on decimal numbers with guaranteed accuracy, including scenarios with negative values.

**Unlock Advanced Numerical Operations:**

* **Control Division Precision:** Specify the exact number of digits after the decimal point for division results, with a default precision of 20 digits for high accuracy.
* **Flexible Rounding:** Round numbers to the nearest integer or a specific number of decimal places with various rounding modes (up, down, half-up, half-down, half-even, half-odd) to meet your exact requirements.
* **Round Based on Significant Figures:** Control rounding based on the number of significant figures, crucial for scientific and engineering applications.
* **Chain Operations with Pipe:** Simplify complex calculations by chaining arithmetic operations in a readable and intuitive manner.
* **Analyze Data Distribution:** Calculate quartiles (Q1, Q2, Q3) to understand the spread and central tendency of your numerical data, helping identify outliers and the shape of the distribution.
* **Sort Numbers Accurately:** Sort arrays of numbers, including negative and decimal values, in ascending or descending order, correctly handling string representations of numbers that JavaScript's native sort might misinterpret.
* **Calculate Central Tendency:** Easily compute the mean (average) of a set of numbers.
* **Identify Extremes:** Find the maximum and minimum values within an array of numbers.

## When is @numio/bigmath essential?

This library is particularly invaluable in applications where numerical accuracy and the ability to handle large numbers are paramount:

* **Financial Applications:** Accurate calculations for large sums of money, precise interest rates, and complex financial modeling.
* **Scientific Computing:** Working with extremely large or small numbers in simulations, data analysis, and research.
* **Cryptography:** Implementing cryptographic algorithms that rely on high-precision arithmetic.
* **E-commerce and Payments:** Handling precise amounts and avoiding rounding errors in transactions.
* **Data Analysis and Statistics:** Performing accurate statistical calculations on datasets with varying scales.
* **Any Scenario Exceeding JavaScript's Number Limits:** Ensuring the reliability of your calculations when dealing with numbers beyond the safe integer limit or requiring more than 15 significant digits.

With `@numio/bigmath`, you can confidently perform complex arithmetic operations with the assurance of accuracy, regardless of the size or precision of the numbers involved.

### Latest update

Added sorting, min/max, mean.

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
  .calc() // convert end result to readable string
```

### Quartile
```javascript
import { quartile } from "@numio/bigmath";

quartile(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) // { Q1: "2.5", Q2: "5", Q3: "7.5" }
quartile(["0.001", "0.3", "0.4", "1"]) // { Q1: "0.1505", Q2: "0.35", Q3: "0.7" }

```

### Sort
```javascript
import { sort } from "@numio/bigmath";

// native js sort for strings
["1", "10", "11", "101", "11", "10", "1"].sort() // ["1", "1", "10", "10", "101", "11", "11"]

// sort from "@numio/bigmath"
sort(["1", "10", "11", "101", "11", "10", "1"]) // ["1", "1", "10", "10", "11", "11", "101"]

// ASC sorting
sort(["-0.1", "0.1", "-1"], "asc") // ["-1", "-0.1", "0.1"]

// DESC sorting
sort(["-0.1", "0.1", "-1"], "desc") // ["0.1", "-0.1", "1"]

```

### Mean 
```javascript
import { mean } from "@numio/bigmath";

mean(["5", "4", "3", "2", "1", "0"]) // "2.5"
mean(["0.5", "0.4", "0.3", "0.2", "0.1", "0"]) // "0.25"
```

### Max 
```javascript
import { max } from "@numio/bigmath";

max(["2", "-1", "0.1"]) // 2;
```

### Min
```javascript
import { min } from "@numio/bigmath";

min(["2", "-1", "0.1"]) // -1;
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

Download from NPM - https://www.npmjs.com/package/@numio/bigmath

Download from JSR - https://jsr.io/@numio/bigmath

Home page - https://github.com/shpunter/numio-bigmath/blob/main/README.md

License - https://github.com/shpunter/numio-bigmath/blob/main/LICENSE

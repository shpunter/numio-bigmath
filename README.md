# Infinite-numbers

Infinite-numbers is an arbitrary-precision arithmetic library. This library provides functions for performing arithmetic operations (addition, subtraction, multiplication, and division) on numbers of arbitrary length. It addresses the limitations of JavaScript's built-in number type, which suffers from precision loss when dealing with very large or very small numbers, or numbers with more than 15 significant digits.


## Key Features and Benefits

* **Arbitrary Precision:** Handles numbers of any length, avoiding the limitations of JavaScript's `Number` type. This allows for calculations with extremely large or small numbers without loss of precision.
* **No Precision Loss:** Eliminates precision errors that occur when using numeric literals with more than 15 significant digits. The library ensures accurate calculations even with very long numbers.
* **Four Basic Operations:** Provides functions for addition (`add`), subtraction (`sub`), multiplication (`mul`), and division (`div`).
* **Decimal Handling:** Correctly handles decimal numbers and performs calculations accurately, including scenarios involving negative numbers.
* **Division Precision Control:** The `div` function allows you to specify the number of digits after the decimal point for the result. The default precision is 20 digits.
* **Easy to Use:** The library provides simple and intuitive functions for performing arithmetic operations.


## How it Solves the Problem

JavaScript's `Number` type uses a 64-bit floating-point representation (IEEE 754), which can lead to precision issues when dealing with numbers that exceed its representable range or require more than 15 significant digits. This library likely uses a different representation internally (e.g., strings or arrays of digits) to store and manipulate numbers, effectively bypassing the limitations of the built-in `Number` type. This allows it to perform calculations on numbers of virtually unlimited size and maintain accuracy.

## Use Cases

This library is particularly useful in scenarios where precise calculations with large numbers are essential, such as:

* **Financial applications:** Dealing with large sums of money or precise interest calculations.
* **Scientific computing:** Working with very large or small numbers in scientific simulations.
* **Cryptography:** Implementing cryptographic algorithms that require high precision.
* **Any application** where exceeding JavaScript's number limits is a concern.


### Latest update

In version 0.3.0 added handling of negative numbers \
In version 0.2.0 added division (int & float numbers)

# Install:

### NPM

```bash
npm install infinite-numbers
```

### YARN

```bash
yarn add infinite-numbers
```

### BUN

```bash
bun add infinite-numbers
```

### PNPM

```bash
pnpm add infinite-numbers
```

### DENO

```bash
deno add jsr:@num/infinite-numbers
```

# Examples:

### Add numbers

```javascript
import { add } from "@num/infinite-numbers";

const int = add("12345", "99"); // 124444
const float = add("0.1", "0.2"); // 0.3
const negative = add("0.1", "-0.3"); // -0.2
```

### Subtract numbers
```javascript
import { sub } from "@num/infinite-numbers";

const int = sub("150", "99"); // 51
const float = sub("1", "0.99"); // 0.01
const negative = sub("-0.1", "-0.3"); // 0.2
```

### Multiply numbers
```javascript
import { mul } from "@num/infinite-numbers";

const int = mul("15", "11"); // 165
const float = mul("0.01", "0.99"); // 0.0099
const negative = mul("-2", "3"); // -6
```

### Divide numbers
```javascript
import { div } from "@num/infinite-numbers";

const int = div("9999", "33"); // 303
const float = div("0.06", "0.2"); // 0.3
const negative = div("-2", "-3"); // 6

// set number of digit after the decimal. By default it's 20
div("10", "3", 5); // 3.33333
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

### Allowed inputs

```javascript
"123"         // ok
"1.3"         // ok
"2"           // ok
"-123"        // ok

""            // type error
"1 3"         // type error
"abc"         // type error
"a2bc"        // type error
"."           // type error
".22"         // type error
"22."         // type error
"22...22"     // type error
"22.22.22"    // type error
"-"           // type error
"2-2"         // type error
"22-"         // type error
"22--22"      // type error
"22-22-22"    // type error
"-.2"         // type error
".-2"         // type error
"2+2"         // type error
"+2"          // type error
"2,2"         // type error
"Infinity"    // type error
"3.333e+56"   // type error
```

Download from NPM - https://www.npmjs.com/package/infinite-numbers \
Download from JSR - https://jsr.io/@num/infinite-numbers \
Home page - https://github.com/shpunter/infinite-num/blob/main/README.md \
License - https://github.com/shpunter/infinite-num/blob/main/LICENSE
# @numio/bigmath: Precise Arithmetic Beyond JavaScript's Limits

**Do you struggle with inaccurate calculations involving very large or very small numbers, or decimal numbers with high precision in JavaScript?**

`@numio/bigmath` is your solution! This library provides a robust set of functions for performing **arbitrary-precision arithmetic**, effectively overcoming the limitations of JavaScript's built-in `Number` type. Say goodbye to unexpected rounding errors and precision loss when dealing with numbers that exceed 15 significant digits or involve complex decimal operations.

## Why Choose @numio/bigmath?

**Solve Precision Problems:**

* **Handle Numbers of Any Size:** Perform calculations on integers and decimals of virtually unlimited length, without the risk of JavaScript's `Number` limitations.
* **Eliminate Precision Loss:** Achieve accurate results even with numeric literals exceeding 15 significant digits, ensuring the integrity of your calculations.
* **Precise Decimal Operations:** Execute addition, subtraction, multiplication, and division on decimal numbers with guaranteed accuracy, including scenarios with negative values.
* ****NEW! Multi-Base Number Support:** Seamlessly perform arithmetic operations involving **hexadecimal (HEX), octal, binary, and decimal numbers**, offering unparalleled flexibility in handling various number formats.
* ****NEW! Number Format Validation:** Easily validate if a string represents a valid **hexadecimal (`isHex`)**, **binary (`isBinary`)**, **decimal (`isDecimal`)**, **octal (`isOctal`)**, or any valid **number (`isNumber`)** format supported by the library.



**Unlock Advanced Numerical Operations:**

* **Control Division Precision:** Specify the exact number of digits after the decimal point for division results, with a default precision of 20 digits for high accuracy.
* **Flexible Rounding:** Round numbers to the nearest integer or a specific number of decimal places with various rounding modes (up, down, half-up, half-down, half-even, half-odd) to meet your exact requirements.
* **Round Based on Significant Figures:** Control rounding based on the number of significant figures, crucial for scientific and engineering applications.
* **Calculate Roots:**
    * **Calculate Square Root (`sqrt`):** Compute the square root of a number with arbitrary precision. You can also specify the desired precision of the result.
    * ****NEW! Calculate Cube Root (`cbrt`):** Determine the cube root of a number with arbitrary precision, allowing you to specify the desired accuracy.

* **Chain Operations with Pipe:** Simplify complex calculations by chaining arithmetic operations in a readable and intuitive manner.
* **Analyze Data Distribution:**
    * **Calculate Quartiles (Q1, Q2, Q3):** Understand the spread and central tendency of your numerical data, helping identify outliers and the shape of the distribution.
    * **Calculate Median Absolute Deviation (MAD):** Measure the dispersion of a dataset, providing a robust alternative to standard deviation that is less sensitive to outliers.
    * **Calculate Interquartile Range (IQR):** Determine the spread of the middle 50% of your data, useful for identifying the central bulk and potential outliers.
* **Compare Numbers:**
    * **Check for Equality (`isEqual`):** Accurately determine if two arbitrary-precision numbers are equal.
    * **Check if Left is Greater (`isLeftGreater`):** Precisely compare two arbitrary-precision numbers to see if the left operand is greater than the right.
    * ****NEW! Check if Left is Greater or Equal (`isLeftGreaterOrEqual`):** Precisely compare two arbitrary-precision numbers to determine if the left operand is greater than or equal to the right.
* **Sort Numbers Accurately:** Sort arrays of numbers, including negative and decimal values, in ascending or descending order, correctly handling string representations of numbers that JavaScript's native sort might misinterpret.
* **Calculate Central Tendency:** Easily compute the mean (average) of a set of numbers.
* **Identify Extremes:** Find the maximum and minimum values within an array of numbers.
* ****NEW! Calculate Absolute Value (`abs`):** Determine the non-negative value of a number, regardless of its sign.
* ****NEW! Convert Number to Another Base (`toBase`):** Seamlessly convert numbers between decimal, hexadecimal (HEX), binary, and octal representations.

## When is @numio/bigmath essential?

This library is particularly invaluable in applications where numerical accuracy and the ability to handle large numbers are paramount:

* **Financial Applications:** Accurate calculations for large sums of money, precise interest rates, and complex financial modeling.
* **Scientific Computing:** Working with extremely large or small numbers in simulations, data analysis, and research.
* **Cryptography:** Implementing cryptographic algorithms that rely on high-precision arithmetic.
* **E-commerce and Payments:** Handling precise amounts and avoiding rounding errors in transactions.
* **Data Analysis and Statistics:** Performing accurate statistical calculations on datasets with varying scales.
* **Low-Level Operations:** Working with different number representations commonly found in computer systems.
* **Any Scenario Exceeding JavaScript's Number Limits:** Ensuring the reliability of your calculations when dealing with numbers beyond the safe integer limit or requiring more than 15 significant digits.

With `@numio/bigmath`, you can confidently perform complex arithmetic operations with the assurance of accuracy, regardless of the size or precision of the numbers involved.

### Latest update

**New Functions added:**

* `isHex` - Checks if a string is a valid hexadecimal number (prefixed with `0x` or `-0x`).
* `isBinary` - Checks if a string is a valid binary number (prefixed with `0b` or `-0b`).
* `isDecimal` - Checks if a string is a valid decimal number.
* `isOctal` - Checks if a string is a valid octal number (prefixed with `0o` or `-0o`).
* `isNumber` - Checks if a string is a valid number in any of the formats supported by the library (decimal, hexadecimal, binary, octal).

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

##
### See documentation and examples here: https://numio.deno.dev 
##

Download from NPM - https://www.npmjs.com/package/@numio/bigmath

Download from JSR - https://jsr.io/@numio/bigmath

Home page - https://numio.deno.dev

Change log - https://github.com/shpunter/numio-bigmath/blob/main/CHANGELOG.md

License - https://github.com/shpunter/numio-bigmath/blob/main/LICENSE

# @numio/bigmath: Precise Arithmetic Beyond JavaScript's Limits

@numio/bigmath is a powerful and reliable JavaScript library designed for precise numerical computations, overcoming common limitations of standard JavaScript number handling. It provides a rich set of functionalities for arithmetic, statistical analysis, data manipulation, and number base conversions, ensuring accuracy even with extremely large numbers and solving notorious floating-point precision issues like `0.1 + 0.2 !== 0.3`.


## Latest Update

This update introduces several enhancements and new functionalities:

- **Improved Error Handling:** The application now features more robust error handling to provide clearer feedback and prevent unexpected crashes.
- **Freedman-Diaconis Rule (FDR):** Added the Freedman-Diaconis rule for optimal binwidth estimation in histogram creation.
- **Median Absolute Deviation (MAD):** Implemented calculation for the Median Absolute Deviation, allowing users to compute it based on either the `median` or the `mean` of the dataset.

## Existing Functionality

The application currently supports the following operations:

- **Arithmetic:**
    - `add`: Addition of numbers.
    - `sub`: Subtraction of numbers.
    - `mul`: Multiplication of numbers.
    - `div`: Division of numbers.
- **Rounding:**
    - `round`: Rounding numbers to a specified number of decimal places.
- **Data Manipulation:**
    - `pipe`: Chaining operations together.
    - `sort`: Sorting arrays.
- **Statistical Measures:**
    - `quartile`: Calculating quartiles of a dataset.
    - `mean`: Calculating the average of a dataset.
    - `max`: Finding the maximum value in a dataset.
    - `min`: Finding the minimum value in a dataset.
    - `MAD`: Calculating the Median Absolute Deviation (based on either median or mean).
    - `IQR`: Calculating the Interquartile Range.
    - `FDR`: Freedman-Diaconis rule
- **Comparison:**
    - `isEqual`: Checking if two values are equal.
    - `isLeftGreater`: Checking if the left value is greater than the right value.
    - `isLeftGreaterOrEqual`: Checking if the left value is greater than or equal to the right value.
- **Mathematical Functions:**
    - `sqrt`: Calculating the square root of a number.
    - `cbrt`: Calculating the cube root of a number.
    - `abs`: Calculating the absolute value of a number.
    - `mod`: Modulo operation, which finds the remainder when one number is divided by another
- **Number Base Conversion:**
    - `toBase`: Converting a number to a specified base.
    - `isHex`: Checking if a string is a valid hexadecimal number.
    - `isBinary`: Checking if a string is a valid binary number.
    - `isDecimal`: Checking if a string is a valid decimal number.
    - `isOctal`: Checking if a string is a valid octal number.
    - `isNumber`: Checking if a value is a number.
- **Utility:**
    - `Benchmark`: Functionality for benchmarking code execution.

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

### 2.2.2
Throw an error if input for MAD and IQR is less than 3 elements
Add home-page url

### 2.2.1
Add Number format validation examples (README.md)

### 2.2.0
Added `isHex(str: string): boolean` - Checks if a string is a valid hexadecimal number (prefixed with `0x` or `-0x`).
Added `isBinary(str: string): boolean` - Checks if a string is a valid binary number (prefixed with `0b` or `-0b`).
Added `isDecimal(str: string): boolean` - Checks if a string is a valid decimal number.
Added `isOctal(str: string): boolean` - Checks if a string is a valid octal number (prefixed with `0o` or `-0o`).
Added `isNumber(str: string): boolean` - Checks if a string is a valid number in any of the formats supported by the library (decimal, hexadecimal, binary, octal).

### 2.1.3
Optimize performance for small numbers

### 2.1.2
Renamed main.ts files
Changed import path in test files
Change build config - run test on JSR and NPM versions

### 2.1.1
Fixed lib crash (NPM version)

### 2.1.0 
Added `toBase` - convert number to another base
Added `abs` - absolute value
Added `isLeftGreaterOrEqual` - Is the left-hand side value greater than or equal to the right-hand side value
Added `cbrt` - cube root of a number

Added `Pipe().abs` - absolute value in pipe
Added `Pipe().resultToBase` - convert number to another base in pipe

### 2.0.0
The performance was improved. Adding, subtracting, dividing, and multiplying are now **2** to **5** times faster than before.\
Adding, subtracting, dividing, and multiplying support operations on HEX, octal, binary, and decimal numbers. Mixed-type calculations are allowed, with the final result converted to decimal.

### 1.1.0
Added `sqrt` - square root of a number\
Added `isEqual` and `isLeftGreater` - to compare 2 numbers.\
Added `MAD` - Median Absolute Deviation.\
Added `IQR` - Interquartile Range.
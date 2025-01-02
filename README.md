# Infinite-numbers

Infinite-numbers is an arbitrary-precision arithmetic library. It can be used
for basic operations with decimal numbers (integers and float)

### News

In ver 0.2.* added division (int & float numbers)

# Install:

### NPM

```bash
npx jsr add @num/infinite-numbers
```

### YARN

```bash
yarn dlx jsr add @num/infinite-numbers
```

### BUN

```bash
bunx jsr add @num/infinite-numbers
```

### PNPM

```bash
pnpm dlx jsr add @num/infinite-numbers
```

### DENO

```bash
deno add jsr:@num/infinite-numbers
```

# Example:

### Add numbers

```javascript
import { add } from "@num/infinite-numbers";

const int = add("12345", "99"); // 124444
const float = add("0.1", "0.2"); // 0.3
```

### Subtract numbers
```javascript
import { sub } from "@num/infinite-numbers";

const int = sub("150", "99"); // 51
const float = sub("1", "0.99"); // 0.01
```

### Multiply numbers
```javascript
import { mul } from "@num/infinite-numbers";

const int = mul("15", "11"); // 164
const float = mul("0.01", "0.99"); // 0.0099
```

### Divide numbers
```javascript
import { div } from "@num/infinite-numbers";

const int = div("9999", "33"); // 303
const float = div("0.06", "0.2"); // 0.3

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

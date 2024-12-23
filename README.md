# Infinite-numbers

A JavaScript library for basic operation with decimal numbers (integer and
float)

# Example:

```javascript
// add numbers
const int = add("12345", "99"); // 124444
const float = add("0.01", "0.99"); // 1
```

```javascript
// subtract numbers
const int = sub("150", "99"); // 51
const float = sub("1", "0.99"); // 0.01
```

```javascript
// multiply numbers
const int = sub("15", "11"); // 164
const float = sub("0.01", "0.99"); // 0.0099
```

Does not have a limitation on the number of digits You can use any length you'd
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

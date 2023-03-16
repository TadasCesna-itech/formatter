### Currency Formatter
This is a small library for formatting currency amounts into strings, according to a given currency symbol and decimal separator. It includes some basic input validation to ensure that the amount is a valid number.

## Installation
You can install this library via NPM:

```
npm install 
```

## Usage
Here's an example of how you can use this formatter:

```
const amount = 123456;
console.log(getUK(amount));   // prints "£1234.56"
console.log(getEuro(amount)); // prints "€1234,56"
```

You can also use the formatCurrency function directly if you need to create a custom formatter. It creates a formatter function for the given currency symbol and decimal separator. The returned function takes a number and returns a formatted string.

```
const { formatCurrency } = require('currency-formatter');

const getDollar = formatCurrency('$', '.');
console.log(getDollar(123456)); // prints "$1234.56"
```

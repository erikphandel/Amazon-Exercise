import { formatCurrency } from "../scripts/utils/money.js";

console.log('Testing suite: formatCurrency()')

if (formatCurrency(2095) === '20.95') {
    console.log('Standard test: passed')
} else {
    console.log('Standard test: failed')
};

if (formatCurrency(0) === '0.00') {
    console.log('Conversion for 0: passed')
} else {
    console.log('Conversion for 0: failed')
};

if (formatCurrency(2000.5) === '20.01') {
    console.log('Conversion for decimals: passed')
} else {
    console.log('Conversion for decimals: failed')
};
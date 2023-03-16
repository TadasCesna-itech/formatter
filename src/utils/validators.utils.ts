const isNumber = (number: number): boolean => {
    if (typeof number === "number" && !Number.isNaN(number)) {
        return true;
    }
    return false;
};

const isInteger = (number: number): boolean => {
    const absoluteNumber = Math.abs(number);
    if (absoluteNumber % 1 === 0) {
        return true;
    }
    return false;
};

const isValidCurrencySymbol = (currencySymbol: string) => {
    return currencySymbol !== "."; // would check all currency symbols that our service provides
}

const isValidDecimalSeparator = (decimalSeparator: string) => {
    return decimalSeparator === "." || decimalSeparator === ",";
}

export { isNumber, isInteger, isValidCurrencySymbol, isValidDecimalSeparator };

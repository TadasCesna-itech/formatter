import { isInteger, isNumber, isValidCurrencySymbol, isValidDecimalSeparator } from '../utils/validators.utils';

const validateNumberInput = (number: number) => {
    if (isNumber(number) && isInteger(number)) {
        return
    }
    throw new Error("Input must be of type integer number");
}

const validateFormatterInputs = (currencySymbol: string, decimalSeparator: string) => {
    if (
        isValidCurrencySymbol(currencySymbol)
        && isValidDecimalSeparator(decimalSeparator)
    ) {
        return
    }
    throw new Error("Currency symbol not supported or invalid decimal separator provided");
}

export { validateNumberInput, validateFormatterInputs } 

import { isInteger, isNumber, isValidCurrencySymbol, isValidDecimalSeparator } from '../utils/validators.utils';
import { InputError, CurrencyError, DecimalSeparatorError } from '../errors/input.error'

const validateNumberInput = (number: number) => {
    if (isNumber(number) && isInteger(number)) {
        return
    }
    throw new InputError("Input must be of type integer number");
}

const validateFormatterInputs = (currencySymbol: string, decimalSeparator: string) => {
    if (
        !isValidCurrencySymbol(currencySymbol)
    ) {
        throw new CurrencyError(currencySymbol);
    }
    if (
        !isValidDecimalSeparator(decimalSeparator)
    ) {
        throw new DecimalSeparatorError(decimalSeparator);
    }
}

export { validateNumberInput, validateFormatterInputs } 

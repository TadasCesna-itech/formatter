class InputError extends Error {
    public value: string;
    public name: string

    constructor(
        errorMessage: string,
    ) {
        super(errorMessage);
        this.name = 'Input error';
    }
}

class CurrencyError extends InputError {
    constructor(
        currency: string,
    ) {
        const errorMessage = `Provided currency ${currency} is not supported`;
        super(errorMessage);
    }
}

class DecimalSeparatorError extends InputError {
    constructor(
        decimalSeparator: string,
    ) {
        const errorMessage = `Provided decimal separator ${decimalSeparator} is not a valid separator`;
        super(errorMessage);
    }
}

export {
    DecimalSeparatorError,
    CurrencyError,
    InputError
}
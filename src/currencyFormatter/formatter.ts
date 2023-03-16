import { Formatter } from './types';
import { validateNumberInput, validateFormatterInputs } from './validations'

const formatCurrency = function (currencySymbol: string, decimalSeparator: string): Formatter {
  validateFormatterInputs(currencySymbol, decimalSeparator);

  return function (amount: number): string {
    validateNumberInput(amount);

    const numberPrefix = amount < 0 ? "-" : "";
    const banknoteAmount = (Math.abs(amount) / 100).toFixed(2);
    const [int, decimal] = banknoteAmount.split('.');

    return `${numberPrefix}${currencySymbol}${int}${decimalSeparator}${decimal}`;
  };
};

const getUK: Formatter = formatCurrency('£', '.');
const getEuro: Formatter = formatCurrency('€', ',')

export {
  formatCurrency,
  getUK,
  getEuro
}

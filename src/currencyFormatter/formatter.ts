import { Formatter } from './types';
import { validateNumberInput, validateFormatterInputs } from './validations';
import { getBanknotesAndCents } from '../utils/currency.utils';

const formatCurrency = function (currencySymbol: string, decimalSeparator: string): Formatter {
  validateFormatterInputs(currencySymbol, decimalSeparator);

  return function (amount: number): string {
    validateNumberInput(amount);

    const numberPrefix = amount < 0 ? "-" : "";
    const { banknotes, cents } = getBanknotesAndCents(amount);

    return `${numberPrefix}${currencySymbol}${banknotes}${decimalSeparator}${cents}`;
  };
};

const getUK: Formatter = formatCurrency('£', '.');
const getEuro: Formatter = formatCurrency('€', ',')

export {
  formatCurrency,
  getUK,
  getEuro
}

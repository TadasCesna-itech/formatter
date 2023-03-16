import { formatCurrency, getUK, getEuro } from "./formatter"
import { InputError, DecimalSeparatorError, CurrencyError } from "../errors/input.error"

describe('getUK', () => {
  it('should format UK currency correctly', () => {
    expect(getUK(2499)).toBe('£24.99');
    expect(getUK(10000)).toBe('£100.00');
    expect(getUK(99999999)).toBe('£999999.99');
    expect(getUK(540)).toBe('£5.40');
    expect(getUK(1)).toBe('£0.01');
    expect(getUK(-1)).toBe('-£0.01');
  });
});

describe('getEuro', () => {
  it('should format Euro currency correctly', () => {
    expect(getEuro(1234)).toBe('€12,34');
    expect(getEuro(56789)).toBe('€567,89');
    expect(getEuro(999999)).toBe('€9999,99');
    expect(getEuro(540)).toBe('€5,40');
    expect(getEuro(1)).toBe('€0,01');
    expect(getEuro(-1)).toBe('-€0,01');
  });
});

describe('formatCurrency', () => {
  it('Throws an input error if currency is not supported', () => {
    expect(() => formatCurrency('.', '.')).toThrow(CurrencyError);
  });

  it.each([
    ["£", ",", 1e10000],
    ["£", ",", NaN],
    ["£", ",", null],
    ["£", ",", Infinity],
    ["£", ",", -Infinity],
    ["£", ",", 0.1]
  ])(
    "Throws an input error if value is a floating number or not an integer",
    (currencySymbol, decimalSeparator, value) => {
      const getUK = formatCurrency(currencySymbol, decimalSeparator);

      expect(() => getUK(value)).toThrow(InputError);
    }
  );

  it.each([
    ["£", "a", 200],
    ["£", "b", 100],
  ])(
    "Throws an input error if provided decimal separator is invalid",
    (currencySymbol, decimalSeparator, value) => {
      expect(() => formatCurrency(currencySymbol, decimalSeparator)).toThrow(DecimalSeparatorError);
    }
  );

  it.each([
    ["€", ".", 1901, "€19.01"],
    ["€", ".", 2409, "€24.09"],
    ["€", ",", Number.MAX_SAFE_INTEGER, "€90071992547409,91"],
    ["£", ",", Number.MAX_SAFE_INTEGER - 2, "£90071992547409,89"],
    ["£", ".", 4, "£0.04"],
    ["£", ".", 1, "£0.01"],
    ["€", ".", -1e6, "-€10000.00"],
    ["€", ".", -2, "-€0.02"],
    ["£", ",", 0, "£0,00"]
  ])(
    "Formats valid inputs as expected",
    (currencySymbol, decimalSeparator, currencyValue, expectedResult) => {
      const getCurrency = formatCurrency(currencySymbol, decimalSeparator);

      expect(getCurrency(currencyValue)).toBe(expectedResult);
    }
  );
});

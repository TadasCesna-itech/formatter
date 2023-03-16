import { currencyBanknotesAndCents } from './utils.types';

const getBanknotesAndCents = (amount: number): currencyBanknotesAndCents => {
    const banknoteAmount = (Math.abs(amount) / 100).toFixed(2);
    const [banknotes, cents] = banknoteAmount.split('.');
    return {
        banknotes,
        cents
    };
};

export { getBanknotesAndCents };

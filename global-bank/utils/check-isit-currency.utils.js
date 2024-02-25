import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { MESSAGE } from "../const/message.const.js";

const checkIsItCurrency = (currency) => {
  const upperToCurrency = currency.toUpperCase();
  const currencyList = ENABLED_CURRENCIES.map((c) => c.currency);
  if (!currencyList.includes(upperToCurrency)) {
    throw new Error(MESSAGE.RETRY);
  }
  return upperToCurrency;
};
export { checkIsItCurrency };

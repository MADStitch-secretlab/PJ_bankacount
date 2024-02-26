import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { MESSAGE } from "../const/message.const.js";

const checkIsItCurrency = (currency) => {
  const upperToCurrency = currency.toUpperCase();
  const currencyList = ENABLED_CURRENCIES.map((c) => c.currency);
  return currencyList.includes(upperToCurrency);

};



// 필요 없음

export { checkIsItCurrency };

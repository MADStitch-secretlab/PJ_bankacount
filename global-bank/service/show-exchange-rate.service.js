import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { checkIsItCurrency } from "../utils/check-isit-currency.utils.js";
import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { compareExchangeRate } from "../helper/compare-exchange-rate.helper.js";

import {activateExchangeController} from "../controller/exchange-controller.controller.js";

/**
 * retry 는 환율은 이미 조회했는지를 판단하는 boolean 값
 */


const showExchangeRate = async () => {
  try {
    const mainCurrency = await promiseReadLine(
      MESSAGE.EXCHANGE.INPUT_MAIN_CURRENCY,
    );
    checkExit(mainCurrency);
    checkIsItCurrency(mainCurrency);
    const upperCurrency = mainCurrency.toUpperCase();
    if (!ENABLED_CURRENCIES.map((c) => c.currency).includes(upperCurrency)) {
      throw new Error(MESSAGE.RETRY);

    }
    const exchangeRateMap = ENABLED_CURRENCIES.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.currency]: compareExchangeRate(upperCurrency, curr.currency),
      };
    }, {});

    const targetCurrency = ENABLED_CURRENCIES.find(
      (c) => c.currency === upperCurrency,
    );
    const targetBaseAmount = targetCurrency.baseAmount;
    const shownList = ENABLED_CURRENCIES.filter(
      (c) => c.currency !== upperCurrency,
    );
    const shownListBaseAmount = shownList.map((c) => c.baseAmount);
    console.log(
      `${shownList.map((c) => `${c.baseAmount}${c.currency}${c.to_KR} : ${exchangeRateMap[c.currency] * [c.baseAmount]}${upperCurrency}${targetCurrency.to_KR}`).join("\n")}`,
    );
    return activateExchangeController(true);
  } catch (e) {
    console.log(e.message);
    return showExchangeRate();
  }
};



export {showExchangeRate};

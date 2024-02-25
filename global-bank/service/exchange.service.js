import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { checkIsItCurrency } from "../utils/check-isit-currency.utils.js";
import { EXCHANGE_ACTION_MAP } from "../const/action-map.const.js";
import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { compareExchangeRate } from "../helper/compare-exchange-rate.helper.js";
import { exchangeComparing } from "../helper/exchage-comparing.helper.js";
import { updateRepository } from "../repository/exchange.repository.js";
import { checkCurrency } from "../repository/check-money.repository.js";
import { showAccount } from "../helper/show-account.helper.js";

const exchange = async () => {
  try {
    const exchangeSection = await promiseReadLine(
      MESSAGE.EXCHANGE.SELECT_SECTION,
    );
    checkExit(exchangeSection);
    for (const action of Object.values(EXCHANGE_ACTION_MAP)) {
      if (!action.keys.includes(exchangeSection)) {
        throw new Error(MESSAGE.RETRY);
      }
      await action.action();
    }
  } catch (e) {
    console.log(e.message);
    return exchange();
  }
};

const showExchangeRate = async () => {
  try {
    const mainCurrency = await promiseReadLine(
      MESSAGE.EXCHANGE.INPUT_MAIN_CURRENCY,
    );
    checkExit(mainCurrency);
    const upperCurrency = checkIsItCurrency(mainCurrency);
    if (!ENABLED_CURRENCIES.map((c) => c.currency).includes(upperCurrency)) {
      throw new Error(MESSAGE.EXCHANGE.RETRY);
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
    return selectExchangeOrOther();
  } catch (e) {
    console.log(e.message);
    return showExchangeRate();
  }
};

const selectExchangeOrOther = async () => {
  const answer = await promiseReadLine(
    MESSAGE.EXCHANGE.SELECT_EXCHANGE_OR_OTHER,
  );

  for (const action of Object.values(EXCHANGE_ACTION_MAP)) {
    if (action.keys.includes(answer)) {
      await action.action();
      return;
    }
  }

  console.log(MESSAGE.RETRY);
  return selectExchangeOrOther();
};

const exchangeCurrency = async () => {
  try {
    const from = await promiseReadLine(MESSAGE.EXCHANGE.FROM);
    checkExit(from);
    const fromCurrency = checkIsItCurrency(from);
    const to = await promiseReadLine(MESSAGE.EXCHANGE.TO);
    checkExit(to);
    const toCurrency = checkIsItCurrency(to);
    if (fromCurrency === toCurrency)
      throw new Error(MESSAGE.EXCHANGE.SAME_CURRENCY);
    const amount = await promiseReadLine(MESSAGE.EXCHANGE.AMOUNT);
    checkExit(amount);
    if (isNaN(amount)) throw new Error(MESSAGE.RETRY);
    if (parseInt(amount, 10) <= 0)
      throw new Error(MESSAGE.EXCHANGE.INVALID_AMOUNT);
    // 환전할 금액(10% 부과한 금액)이 충분한지 확인
    const fromAmount = await exchangeComparing(from, amount);
    // 환전 후 금액
    const result =
      (await compareExchangeRate(to, from)) * parseFloat(amount, 10) +
      (await checkCurrency(to));
    // 환전 정보 sql에 저장
    await updateRepository(from, fromAmount);
    await updateRepository(from, result);
    await console.log(MESSAGE.EXCHANGE.SUCCESS);
    await showAccount();
  } catch (e) {
    console.log(e.message);
    return exchangeCurrency();
  }
};

export { exchange, showExchangeRate, exchangeCurrency , selectExchangeOrOther};

import {promiseReadLine, promiseReadLineWithValidationFns} from "../../common/utils/promise-readline.utils.js";
import {MESSAGE} from "../const/message.const.js";
import {isNumber} from "../helper/check-is-it-num.helper.js";
import {checkIsItCurrency} from "../utils/check-isit-currency.utils.js";
import {exchangeComparing} from "../helper/exchage-comparing.helper.js";
import {compareExchangeRate} from "../helper/compare-exchange-rate.helper.js";
import { findMultiCurrencyAmount} from "../repository/find-money-amount.repository.js";
import {updateAccountMulti} from "../repository/update-account.repository.js";
import {showAccount} from "./inquiry.service.js";

const exchangeCurrency = async (string) => {
  try {
    const from = await promiseReadLineWithValidationFns({
      question: MESSAGE.EXCHANGE.FROM,
      validationFnList: [checkIsItCurrency],
      transformFn: (currency) => currency.toUpperCase(),
    });
    const to = await promiseReadLineWithValidationFns({
      question: MESSAGE.EXCHANGE.TO,
      validationFnList: [checkIsItCurrency],
      transformFn: (currency) => currency.toUpperCase(),
    });

    if (from === to) throw new Error(MESSAGE.EXCHANGE.SAME_CURRENCY);
    const amount = await promiseReadLineWithValidationFns({
      question: MESSAGE.EXCHANGE.AMOUNT,
      validationFnList: [isNumber],
      transformFn: (amount) => parseFloat(amount, 1),
    });
    const Money = await findMultiCurrencyAmount([from, to]);
    const fromMoney = Money[from];
    const toMoney = Money[to];
    // 환전할 금액(10% 부과한 금액)이 충분한지 확인
    const fromAmount = await exchangeComparing(fromMoney, amount);
    // 환전 후 금액

    const exchangeRate = await compareExchangeRate(to, from);
    const result = exchangeRate * amount + toMoney;
    // 환전 정보 sql에 저장
    await updateAccountMulti({[from] : fromAmount , [to] : result});
    /*
     * await updateRepository({ KRW : 30000, USD : 100 })
     * */
    await console.log(MESSAGE.EXCHANGE.SUCCESS);
    await showAccount();
  } catch (e) {
    console.log(e.message);
    return exchangeCurrency();
  }
};
export {exchangeCurrency};
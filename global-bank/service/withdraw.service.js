import {
  promiseReadLineWithValidationFns,
} from "../../common/utils/promise-readline.utils.js";
import { isNumber } from "../helper/check-is-it-num.helper.js";
import { showAccount } from "./inquiry.service.js";
import { MESSAGE } from "../const/message.const.js";
import { activateExchangeController } from "../controller/exchange-controller.controller.js";
import { checkIsItCurrency } from "../utils/check-isit-currency.utils.js";
import {
  findAllAmount,
  findMultiCurrencyAmount,
} from "../repository/find-money-amount.repository.js";

import { updateAccountMulti } from "../repository/update-account.repository.js";

const withdraw = async () => {
  const currency = await promiseReadLineWithValidationFns({
    question: MESSAGE.WITHDRAW.INPUT_CURRENCY,
    validationFnList: [checkIsItCurrency],
    transformFn: (currency) => currency.toUpperCase(),
  });

  const amount = await promiseReadLineWithValidationFns({
    question: MESSAGE.WITHDRAW.INPUT_AMOUNT,
    validationFnList: [isNumber],
    transformFn: (amount) => parseFloat(amount),
  });


  const money = await findMultiCurrencyAmount([currency]);
  const currentMoney = money[currency];
  if (currentMoney < amount) {
    console.log(MESSAGE.WITHDRAW.LOW_MONEY);
    const money = await findAllAmount();
    console.log(
      `${money.account}의 잔고: KRW: ${money.KRWMoney}, USD: ${money.USDMoney}, JPY: ${money.JPYMoney}, CNY: ${money.CNYMoney}`,
    );
    return activateExchangeController();
  }
  const result = currentMoney - amount;
  await updateAccountMulti({[currency] : result});
  console.log(MESSAGE.WITHDRAW.SUCCESS);
  return showAccount();
};
export { withdraw };


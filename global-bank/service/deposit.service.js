import { promiseReadLineWithValidationFns} from "../../common/utils/promise-readline.utils.js";
import {showAccount} from "./inquiry.service.js";
import {MESSAGE} from "../const/message.const.js";
import {findCurrencyAmount} from "../repository/find-money-amount.repository.js";
import {updateAccount} from "../repository/update-account.repository.js";
import {isNumber} from "../helper/check-is-it-num.helper.js";
import {checkIsItCurrency} from "../utils/check-isit-currency.utils.js";



async function deposit() {
  try {

    const currency = await promiseReadLineWithValidationFns({
        question: MESSAGE.DEPOSIT.INPUT_CURRENCY,
        validationFnList: [checkIsItCurrency],
        transformFn: (currency) => currency.toUpperCase(),
    });
    const amount = await promiseReadLineWithValidationFns({
        question: MESSAGE.DEPOSIT.INPUT_AMOUNT,
        validationFnList: [isNumber],
        transformFn: (amount) => parseFloat(amount )
    });

    const currentAmount = await findCurrencyAmount(currency);
    const amountResult = amount + currentAmount;
    await updateAccount(currency, amountResult);
    console.log(MESSAGE.DEPOSIT.SUCCESS);
    await showAccount()
    process.exit()
  } catch (e) {
    console.log(e.message);
    return deposit();
  }
}

export {deposit};


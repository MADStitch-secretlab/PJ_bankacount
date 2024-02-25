import { addMoney } from "../repository/add-money.repository.js";
import { inputAmount } from "../helper/input-amount.helper.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
import {showAccount} from "../helper/show-account.helper.js";
import {MESSAGE} from "../const/message.const.js";

async function deposit() {
  try {
    const currency = await promiseReadLine(MESSAGE.DEPOSIT.INPUT_CURRENCY);
    checkExit(currency);
    const upperCurrency = currency.toUpperCase();

    if (ENABLED_CURRENCIES.map((c)=> c.currency).includes(upperCurrency)) {
      const numAnswer = await inputAmount();
      await addMoney(upperCurrency, numAnswer);
      console.log(MESSAGE.DEPOSIT.SUCCESS);
      await showAccount()
      process.exit()

    }
    throw new Error(MESSAGE.RETRY);
  } catch (e) {
    console.log(e.message);
    return deposit();
  }
}

export { deposit };

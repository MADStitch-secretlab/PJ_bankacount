import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { subtractAmount } from "../helper/subtract-amount.helper.js";

import { subtractComparing } from "../helper/subtract-comparing.helper.js";
import { showAccount } from "../helper/show-account.helper.js";
import { ENABLED_CURRENCIES } from "../const/currency.const.js";
import { MESSAGE } from "../const/message.const.js";
import { selectExchangeOrOther } from "./exchange.service.js";
import { checkIsItCurrency } from "../utils/check-isit-currency.utils.js";
import { checkExit } from "../utils/check-exit.utils.js";

const withdraw = async () => {
  const currency = await promiseReadLine(MESSAGE.WITHDRAW.INPUT_CURRENCY);
  const upperCurrency = currency.toUpperCase();
  if (!ENABLED_CURRENCIES.map((c) => c.currency).includes(upperCurrency)) {
    console.log(MESSAGE.RETRY);
    return withdraw();
  }
  checkExit(upperCurrency);
  checkIsItCurrency(upperCurrency);

  const numAnswer = await subtractAmount();
  const result = await subtractComparing(upperCurrency, numAnswer);
  if (result === "error") {
    return selectExchangeOrOther();
  }
};
export { withdraw };

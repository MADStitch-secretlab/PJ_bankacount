import { subtractMoneySingle } from "../repository/subtract-money-single.repository.js";
import { checkCurrency } from "../repository/check-money.repository.js";
import { showAccount } from "./show-account.helper.js";
import {MESSAGE} from "../const/message.const.js";

const subtractComparing = async (currency, numAnswer) => {
  const money = await checkCurrency(currency);
  if (money < numAnswer) {
    console.log(MESSAGE.WITHDRAW.LOW_MONEY);
    process.exit();
  }
  await subtractMoneySingle(currency, numAnswer);
  console.log(MESSAGE.WITHDRAW.SUCCESS);
  await showAccount();
  process.exit();
};
export { subtractComparing };

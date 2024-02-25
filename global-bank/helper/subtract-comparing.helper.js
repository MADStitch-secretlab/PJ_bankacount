import { subtractMoneySingle } from "../repository/subtract-money-single.repository.js";
import {checkallMoney, checkCurrency} from "../repository/check-money.repository.js";
import { showAccount } from "./show-account.helper.js";
import { MESSAGE } from "../const/message.const.js";

const subtractComparing = async (currency, numAnswer) => {
  const money = await checkCurrency(currency);
  if (money < numAnswer) {
    console.log(MESSAGE.WITHDRAW.LOW_MONEY);
    const money = await checkallMoney();
    console.log(
        `${money.account}의 잔고: KRW: ${money.KRWMoney}, USD: ${money.USDMoney}, JPY: ${money.JPYMoney}, CNY: ${money.CNYMoney}`,
    );
    const result = "error";
    return result;
  }
  if (money >= numAnswer) {
    await subtractMoneySingle(currency, numAnswer);
    console.log(MESSAGE.WITHDRAW.SUCCESS);
    await showAccount();
    process.exit();
  }
};
export { subtractComparing };

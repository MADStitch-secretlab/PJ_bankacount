import {promiseReadLine, promiseReadLineWithValidationFns} from "../../common/utils/promise-readline.utils.js";
import { findAccount } from "../repository/find-account.repository.js";
import {MESSAGE} from "../const/message.const.js";
import {findAllAmount} from "../repository/find-money-amount.repository.js";
import {isAccount, } from "../helper/check-is-it-num.helper.js";
import {parseAccountNumberPipe} from "../global-bank.pipe.js";

async function showAccountByAccountNumber() {
  const account = await promiseReadLineWithValidationFns({
    question: MESSAGE.INQUIRY.INPUT_ACCOUNT_NUMBER,
    validationFnList: [isAccount],
    message : MESSAGE.INQUIRY.WRONG_ACCOUNT,
    transformFn: parseAccountNumberPipe
  });
  console.log(account)



  const accountData = await findAccount(account);
  if (account !== accountData) {
    console.log(MESSAGE.INQUIRY.NO_ACCOUNT);
    return showAccountByAccountNumber();
  }
  console.log(`${JSON.stringify(account)}` ,MESSAGE.INQUIRY.SUCCESS);
  return showAccount()
}


const showAccount = async () => {
  const money = await findAllAmount();
  console.log(
      `${money.account}의 잔고: KRW: ${money.KRWMoney}, USD: ${money.USDMoney}, JPY: ${money.JPYMoney}, CNY: ${money.CNYMoney}`,
  );
  process.exit();
};

export { showAccountByAccountNumber,showAccount };


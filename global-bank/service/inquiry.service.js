import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { checkAccount } from "../repository/check-account.repository.js";
import { showAccount } from "../helper/show-account.helper.js";
import {MESSAGE} from "../const/message.const.js";

async function inquiry() {
  const account = await promiseReadLine(MESSAGE.INQUIRY.INPUT_ACCOUNT);
  if (account === "종료") {
    console.log(MESSAGE.EXIT);
    process.exit();
  }

  const accountData = await checkAccount(account);
  if (account !== accountData) {
    console.log(MESSAGE.INQUIRY.NO_ACCOUNT);
    process.exit(1);
  }
  console.log(`${JSON.stringify(account)}` ,MESSAGE.INQUIRY.SUCCESS);
  await showAccount()
}

export { inquiry };


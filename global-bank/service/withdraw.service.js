import {promiseReadLine} from "../../common/utils/promise-readline.utils.js";
import {subtractAmount} from "../helper/subtract-amount.helper.js";

import {subtractComparing} from "../helper/subtract-comparing.helper.js";
import {showAccount} from "../helper/show-account.helper.js";
import {ENABLED_CURRENCIES} from "../const/currency.const.js";
import {MESSAGE} from "../const/message.const.js";
const withdraw = async () => {
    const currency = await promiseReadLine(MESSAGE.WITHDRAW.INPUT_CURRENCY);
    if (ENABLED_CURRENCIES.includes(currency) === false) {
        console.log(MESSAGE.RETRY);
        return withdraw();
    }
    if (currency === "종료") {
        console.log(MESSAGE.EXIT);
        process.exit();
    }
    const numAnswer = await subtractAmount();
    await subtractComparing(currency, numAnswer);
    await showAccount();





}
export {withdraw};
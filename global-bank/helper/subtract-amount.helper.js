import  { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import {MESSAGE} from "../const/message.const.js";

async function subtractAmount() {
    const amount = await promiseReadLine(MESSAGE.WITHDRAW.INPUT_AMOUNT);
    if (amount === "종료") {
        console.log(MESSAGE.EXIT);
        process.exit();
    }
    if (isNaN(amount)) {
        console.log(MESSAGE.RETRY);
        return subtractAmount();
    }
    const numAnswer = parseInt(amount, 10);
    if (numAnswer <= 0) {
        console.log(MESSAGE.WITHDRAW.INVALID_AMOUNT);
        return subtractAmount();
    }
    return numAnswer;


}
export {subtractAmount};
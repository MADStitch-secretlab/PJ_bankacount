import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { checkExit } from "../utils/check-exit.utils.js";
import {MESSAGE} from "../const/message.const.js";


const checkValidInput = (input) => {
    checkExit(input);
    if (isNaN(input)) throw new Error(MESSAGE.RETRY);
    if (parseInt(input, 10) <= 0) throw new Error(MESSAGE.DEPOSIT.INVALID_AMOUNT);
    return parseInt(input, 10);
}


async function inputAmount() {
    try {
        const amount = await promiseReadLine(MESSAGE.DEPOSIT.INPUT_AMOUNT);
        return checkValidInput(amount);
    } catch (e){
        console.error(e.message);
        return inputAmount();
    }
}
export {inputAmount};
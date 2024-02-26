import  { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import {MESSAGE} from "../const/message.const.js";

function isNumber(amount) {
    return !isNaN(amount);

}
const isOverThanZero = (amount) => {
    return amount > 0;

}

const isAccount = (account) => {
    return /^\d+(-\d+)*$/.test(account);



}


export {isNumber , isOverThanZero, isAccount};
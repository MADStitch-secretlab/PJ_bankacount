import {selectProgram} from "./global-bank/controller/global-bank.controller.js";
import {promiseReadLine} from "./common/utils/promise-readline.utils.js";
import {checkExit} from "./global-bank/utils/check-exit.utils.js";
import {MESSAGE} from "./global-bank/const/message.const.js";


async function startProgram () {
    const answer = await promiseReadLine("명령어를 입력하세요 \n 1. 외환 거래 은행 \n : ")
    checkExit(answer)
    if (answer === "외환 거래 은행" || answer === "1") {
        return selectProgram();
    }
    console.log(MESSAGE.RETRY);
    return  startProgram();
}


export {startProgram};
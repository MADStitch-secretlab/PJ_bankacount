import {deposit} from "./action/deposit.js";
import {promiseReadLine} from "./action/utils/promise-readline.js";
import {inquiry} from "./action/inquiry.js";
import {withdraw} from "./action/withdraw.js";


async function selectProgram  () {
    const answer = await promiseReadLine("실행할 항목을 입력하세요 \n 1. 입금 \n 2. 출금 \n 3. 잔고 확인 \n 4. 종료 \n: ");
    if (answer === "1" || answer === "입금") {
        await deposit();
    }
    if (answer === "2" || answer === "출금") {
        await withdraw();

    }
    if (answer === "3" || answer === "잔고 확인") {
        await inquiry();
    }
    if (answer === "4" || answer === "종료") {
        console.log("종료합니다.");
        process.exit();
    }
    else {
        console.log("다시 입력하세요");
        await selectProgram();
    }

}
export {selectProgram};
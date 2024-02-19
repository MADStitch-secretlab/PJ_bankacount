import {deposit} from "./action/deposit.js";
import {promiseReadLine} from "./action/utils/promise-readline.js";


async function programSection  () {
    const answer = await promiseReadLine("실행할 항목을 입력하세요 \n 1. 입금 \n 2. 출금 \n 3. 잔고 확인 \n 4. 종료 \n: ");
    if (answer === "1" || answer === "입금") {
        await deposit();
    }
}
export {programSection};
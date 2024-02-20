import {promiseReadLine} from "./utils/promise-readline.js";
import {checkAccount} from "./repository/check-account.js";

async function inquiry() {
    const account = await promiseReadLine("조회할 계좌를 입력하세요: ");
    if (account === "종료") {
        console.log("종료합니다.");
        process.exit();
    }

    await checkAccount(account);


}

export {inquiry};
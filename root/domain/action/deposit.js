import {addMoney} from "./repository/add-money.js";
import {inputAmount} from "./helper/input-amount.js";
import {promiseReadLine} from "./utils/promise-readline.js";

async function deposit() {
    const currency = await promiseReadLine("입금할 통화를 입력하세요: ");
    if (currency !== "KRW" && currency !== "USD" && currency !== "JPY" && currency !== "CNY") {
        console.log("다시 입력하세요.");
        return deposit();
    }
    if (currency === "종료") {
        console.log("종료합니다.");
        process.exit();
    }
    const numAnswer = await inputAmount();
    await addMoney(currency, numAnswer);

}




export {deposit};

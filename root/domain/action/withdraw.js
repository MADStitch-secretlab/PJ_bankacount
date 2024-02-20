import {promiseReadLine} from "./utils/promise-readline.js";
import {subtractAmount} from "./helper/subtract-amount.js";

import {subtractComparing} from "./helper/subtract-comparing.js";

const withdraw = async () => {
    const currency = await promiseReadLine("출금할 통화를 입력하세요: ");
    if (currency !== "KRW" && currency !== "USD" && currency !== "JPY" && currency !== "CNY") {
        console.log("다시 입력하세요.");
        return withdraw();
    }
    if (currency === "종료") {
        console.log("종료합니다.");
        process.exit();
    }
    const numAnswer = await subtractAmount();
    await subtractComparing(currency, numAnswer);





}
export {withdraw};
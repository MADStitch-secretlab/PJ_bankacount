import { promiseReadLine } from "../utils/promise-readline.js";
async function inputAmount() {
    const amount = await promiseReadLine("입금할 금액을 입력하세요: ");
    if (amount === "종료") {
        console.log("종료합니다.");
        process.exit();
    }
    if (isNaN(amount)) {
        console.log("다시 입력하세요.");
        await inputAmount();
    }
    const numAnswer = parseInt(amount, 10);
    if (numAnswer <= 0) {
        console.log("0보다 큰 수를 입력하세요.");
        await inputAmount();
    }
    return numAnswer;





}
export {inputAmount};
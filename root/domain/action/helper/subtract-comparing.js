import {subtractMoneySingle} from "../repository/subtract-money-single.js";
import {subtractMatchcurrency} from "./subtract-matchcurrency.js";
const subtractComparing = async (currency, numAnswer) => {
    const money = await subtractMatchcurrency(currency);
    if (money < numAnswer) {
        console.log("잔액이 부족합니다.");

    }
    await subtractMoneySingle(currency, numAnswer);

}
export {subtractComparing};

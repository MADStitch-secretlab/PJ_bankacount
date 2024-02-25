import {checkCurrency} from "../repository/check-money.repository.js";
import {MESSAGE} from "../const/message.const.js";


const exchangeComparing = async (from ,amount) => {
    try {
        const money = parseFloat(await checkCurrency(from));

        const numAmount = parseFloat(amount);
        console.log(money, amount, numAmount);

        if (money < amount*1.1) throw new Error(MESSAGE.EXCHANGE.NOT_ENOUGH);

        const result = money - numAmount*1.1;
        console.log(result);
        return result

    }catch (e) {
        console.log(e.message);
        throw new Error;

    }
}
export {exchangeComparing};
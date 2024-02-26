import {findCurrencyAmount} from "../repository/find-money-amount.repository.js";
import {MESSAGE} from "../const/message.const.js";


const exchangeComparing = async (from ,amount) => {
    try {
        const money = parseFloat(await findCurrencyAmount(from));

        const numAmount = parseFloat(amount);


        if (money < amount*1.1) throw new Error(MESSAGE.EXCHANGE.NOT_ENOUGH);

        const result = money - numAmount*1.1;
        return result

    }catch (e) {
        console.log(e.message);
        throw new Error;

    }
}
export {exchangeComparing};
import {MESSAGE} from "../const/message.const.js";
import {promiseReadLine} from "../../common/utils/promise-readline.utils.js";
import {checkExchageRate} from "./check-exchage-rate.helper.js";
import {subtractComparing} from "./subtract-comparing.helper.js";
import {checkCurrency} from "../repository/check-money.repository.js";
import {checkExit} from "../utils/check-exit.utils.js";
import {exchangeAddRepository, exchangeSubtractRepository} from "../repository/exchange.repository.js";
import {showAccount} from "./show-account.helper.js";


const exchagecurrency = async () => {
    try {

        const from = await promiseReadLine(MESSAGE.EXCHANGE.FROM);
        const to = await promiseReadLine(MESSAGE.EXCHANGE.TO);

        checkExit(from);
        checkExit(to);
        const checkExchange = parseFloat(await checkExchageRate(to, from));
        const amount = await promiseReadLine(MESSAGE.EXCHANGE.AMOUNT);
        checkExit(amount);
        if (isNaN(amount)) throw new Error(MESSAGE.RETRY);
        if (parseInt(amount, 10) <= 0) throw new Error(MESSAGE.EXCHANGE.INVALID_AMOUNT);
        await exchangeComparing(from, amount);
        const result = parseFloat(checkExchange * parseFloat(amount, 10));
        await exchangeComparing(from, result);
        await exchangeAddRepository(to, result);
        await exchangeSubtractRepository(from, amount);
        await console.log(MESSAGE.EXCHANGE.SUCCESS);
        await showAccount()

    }catch (e) {
        console.log(e.message);
        return exchagecurrency();

    }

}

const exchangeComparing = async (from ,amount) => {
    try {
        const money = await checkCurrency(from);
        if (money < amount) throw new Error(MESSAGE.EXCHANGE.NOT_ENOUGH);
        return true;

    }catch (e) {
        console.log(e.message);
        return exchagecurrency();

    }
}
export {exchagecurrency};
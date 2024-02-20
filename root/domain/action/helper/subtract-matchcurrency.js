import {checkCnyMoney, checkJpyMoney, checkKrwMoney, checkUsdMoney} from "../repository/check-money.js";

const subtractMatchcurrency = async (currency) => {
    if (currency === "KRW") {
        return await checkKrwMoney();
    }
    if (currency === "USD") {
        return await checkUsdMoney();
    }
    if (currency === "JPY") {
        return await checkJpyMoney();
    }
    if (currency === "CNY") {
        return await checkCnyMoney();
    }

}
export {subtractMatchcurrency};
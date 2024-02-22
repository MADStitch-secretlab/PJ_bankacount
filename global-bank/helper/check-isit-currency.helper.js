import {ENABLED_CURRENCIES} from "../const/currency.const.js";
import {MESSAGE} from "../const/message.const.js";

const checkIsItCurrency = (currency) => {
    if (ENABLED_CURRENCIES.includes(currency)){
        return currency;
    }
    throw new Error(MESSAGE.RETRY);

}
export {checkIsItCurrency};

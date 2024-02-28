import {getExchangeRate} from "./get-exchange-rate.helper.js";
import {getRandomNumber} from "../../common/utils/random-crypto.utils.js";

const compareExchangeRate = (to, from) => {
    const toRate = getExchangeRate(to);
    const fromRate = getExchangeRate(from);
    return getRandomNumber(30 , 0.9, 1.1) * parseFloat(toRate / fromRate);
};

export {compareExchangeRate};
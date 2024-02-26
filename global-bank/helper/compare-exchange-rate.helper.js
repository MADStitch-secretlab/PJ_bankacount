import {getRandomRateBy30Seconds} from "./change-rate-30sec.helper.js";
import {getExchangeRate} from "./get-exchange-rate.helper.js";

const compareExchangeRate = (to, from) => {
    const toRate = getExchangeRate(to);
    const fromRate = getExchangeRate(from);
    return getRandomRateBy30Seconds()* parseFloat(toRate / fromRate);
};

export {compareExchangeRate};
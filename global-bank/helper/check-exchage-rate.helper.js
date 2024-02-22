import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
import { EXCHANGRATE } from "../database/exchage-rate.database.js";
import { checkIsItCurrency } from "./check-isit-currency.helper.js";
import { exchagecurrency } from "./exchage-amount.helper.js";
import {checkCurrency} from "../repository/check-money.repository.js";

const showExchangeRate = async () => {
  try {
    const mainCurrency = await promiseReadLine(
      MESSAGE.EXCHANGE.INPUT_MAIN_CURRENCY,
    );
    checkIsItCurrency(mainCurrency);
    const upperCase = mainCurrency.toUpperCase();
    checkExit(upperCase);
    if (upperCase === "KRW") {
      const USD = globalRate * parseFloat(compareExchangeRate("KRW", "USD"));

      const JPY = globalRate * parseFloat(compareExchangeRate("KRW", "JPY"));
      const CNY = globalRate * parseFloat(compareExchangeRate("KRW", "CNY"));
      console.log(
        `1USD(달러) : ${USD}원(원화) \n 100JPY(엔) : ${JPY * 100}원(원화) \n 1CNY(위안) : ${CNY}원(원화)`,
      );
      return exchagesecondsection();
    }
    if (upperCase === "USD") {
      const KRW = globalRate * compareExchangeRate("KRW", "USD");
      const JPY = globalRate * compareExchangeRate("JPY", "USD");
      const CNY = globalRate * compareExchangeRate("CNY", "USD");
      console.log(
        `${KRW}원(원화) : 1USD(달러) \n ${JPY}JPY(엔) : 1USD(달러) \n ${CNY}CNY(위안) : $1USD(달러)`,
      );
      return exchagesecondsection();
    }
    if (upperCase === "JPY") {
      const KRW = globalRate * compareExchangeRate("KRW", "JPY");
      const USD = globalRate * compareExchangeRate("JPY", "USD");
      const CNY = globalRate * compareExchangeRate("CNY", "JPY");
      console.log(
        `${KRW * 100}원(원화) : 100JPY(엔) \n $1USD(달러) : ${USD}JPY(엔) \n ${CNY * 100}CNY(위안) : 100JPY(엔)`,
      );
      return exchagesecondsection();
    }
    if (upperCase === "CNY") {
      const KRW = globalRate * compareExchangeRate("KRW", "CNY");
      const USD = globalRate * compareExchangeRate("CNY", "USD");
      const JPY = globalRate * compareExchangeRate("CNY", "JPY");
      console.log(
        `${KRW}원(원화) : 1CNY(위안) \n $1USD(달러) : ${USD}CNY(위안) \n ${JPY}JPY(엔) : 1CNY(위안)`,
      );
      return exchagesecondsection();
    } else {
      throw new Error(MESSAGE.EXCHANGE.RETRY);
    }
  } catch (e) {
    console.log(e.message);
    await showExchangeRate();
  }
};
const checkExchageRate = async (to, from) => {
    try {
        await checkIsItCurrency(to);
        await checkIsItCurrency(from);
        if (to === from) throw new Error(MESSAGE.EXCHANGE.SAME_CURRENCY);
        for (const rate of Object.values(EXCHANGRATE)) {
            if (to === rate.keys.includes(to) && from === rate.keys.includes(from)) {
                return globalRate * compareExchangeRate(to, from);
            }

        }
        return globalRate * compareExchangeRate(to, from);
    } catch (e) {
        console.log(e.message);
        return exchagecurrency();
    }
};

function getExchangeRate(input) {
    // to 파라미터를 대문자로 변환
    input = input.toUpperCase();

    // EXCHANGRATE 객체를 순회하며 통화 코드 검색
    for (const key in EXCHANGRATE) {
        if (EXCHANGRATE[key].keys.includes(input)) {
            // 일치하는 통화 코드의 value 반환
            return parseFloat(EXCHANGRATE[key].value);
        }
    }
    // 일치하는 통화 코드가 없을 경우 undefined 반환
    return undefined;
}

const compareExchangeRate = (to, from) => {
    const toRate = getExchangeRate(to);
    const fromRate = getExchangeRate(from);
    return toRate / fromRate;
};
let globalRate = 1;
const executeRandom = () => {
    setInterval(() => {
        globalRate = 0.9 + Math.random() * 0.2; // 전역 상태 업데이트
    }, 30000); // 30초마다 실행
};

const exchagesecondsection = async () => {
    try {
        const exchageSection = await promiseReadLine(
            MESSAGE.EXCHANGE.SELECT_SECOND_SECTION,
        );
        checkExit(exchageSection);
        if (exchageSection === "다른 환율 확인") {
            return showExchangeRate();
        }
        if (exchageSection === "환전") {
            return exchagecurrency();


        }
        throw new Error(MESSAGE.RETRY);

    } catch (e) {
        console.log(e.message);
        return exchagesecondsection();
    }
}

    export {
        showExchangeRate,
        checkExchageRate,
        compareExchangeRate,
        executeRandom,
        getExchangeRate

    }


import { ENABLED_CURRENCIES } from "../const/currency.const.js";

function getExchangeRate(input) {
  // to 파라미터를 대문자로 변환
  const inputUpper = input.toUpperCase();

  // EXCHANGRATE 객체를 순회하며 통화 코드 검색
  for (const key in ENABLED_CURRENCIES) {
    if (ENABLED_CURRENCIES[key].currency.includes(inputUpper)) {
      // 일치하는 통화 코드의 value 반환
      return ENABLED_CURRENCIES[key].exchangeRate;
    }
  }
  // 일치하는 통화 코드가 없을 경우 undefined 반환
  return undefined;
}

export {

  getExchangeRate,
};

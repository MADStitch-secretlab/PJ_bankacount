import { ACTION_MAP, EXCHANGE_ACTION_MAP } from "../const/action-map.const.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
async function selectProgram() {
  const answer = await promiseReadLine(MESSAGE.SELECTPROGRAM);

  for (const action of Object.values(ACTION_MAP)) {
    if (action.keys.includes(answer)) {
      if (action.action) {
        await action.action();
      } else {
      }
      return;
    }
  }

  console.log(MESSAGE.RETRY);
  return selectProgram();
}

export { selectProgram };

/*
* 1. helper, service, repository 레이어 다시 분리
*    - exchangeComparing 등
* 2. exchange 함수 service layer -> controller layer로 수정
* 3. selectProgram 에서 sub-controller 수행 로직 추가
* 4. showExchangeRate, exchangeCurrency service 파일 분리
* 5. updateRepository 입력값 수정
*    - await updateRepository({ KRW : 30000, USD : 100 })
* 6. repository 함수명 수정
*    - get, find, create, delete, update
*    - updateRepository -> updateAccount
* 7. random 함수 변경 적용 crypto, bcrypto
* 8. checkCurrency 입력값 수정
*    - await checkCurrency(["KRW", "USD"])
* */

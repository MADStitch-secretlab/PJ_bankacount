import { ACTION_MAP, EXCHANGE_ACTION_MAP } from "../const/action-map.const.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
async function activateMainController() {
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
  return activateMainController();
}


const activateExchangeController = async (retry) => {
  try {
    const answer = await promiseReadLine(
        retry
            ? MESSAGE.EXCHANGE.SELECT_EXCHANGE_OR_OTHER
            : MESSAGE.EXCHANGE.SELECT_SECTION,
    );

    checkExit(answer);

    for (const action of Object.values(EXCHANGE_ACTION_MAP)) {
      if (action.keys.includes(answer)) {
        await action.action();
        return;
      }
    }
  } catch (e) {
    console.log(e.message);
    return activateExchangeController();
  }
}



export { activateMainController, activateExchangeController};

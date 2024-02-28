import {promiseReadLine} from "../../common/utils/promise-readline.utils.js";
import {MESSAGE} from "../const/message.const.js";
import {checkExit} from "../utils/check-exit.utils.js";
import {ACTION_MAP} from "../const/action-map.const.js";

const activateExchangeController = async (retry) => {
    try {
        const answer = await promiseReadLine(
            retry
                ? MESSAGE.EXCHANGE.SELECT_EXCHANGE_OR_OTHER
                : MESSAGE.EXCHANGE.SELECT_SECTION,
        );

        checkExit(answer);

        for (const action of Object.values(ACTION_MAP.EXCHANGE.subActionMap)) {
            if (action.keys.includes(answer)) {
                await action.action();
                return;
            }
        }
        throw new Error(MESSAGE.RETRY);
    } catch (e) {
        console.log(e.message);
        return activateExchangeController();
    }
}

export { activateExchangeController};
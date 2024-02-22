import { MESSAGE } from "../const/message.const.js";
import { checkExit } from "../utils/check-exit.utils.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { showExchangeRate } from "../helper/check-exchage-rate.helper.js";
import { exchagecurrency } from "../helper/exchage-amount.helper.js";
const exchange = async () => {
  try {
    const exchageSection = await promiseReadLine(
      MESSAGE.EXCHANGE.SECELCT_SECTION,
    );
    checkExit(exchageSection);
    if (exchageSection === "환율 확인") {

      return showExchangeRate();




    }
    if (exchageSection === "환전") {
      return exchagecurrency();
    }
    throw new Error(MESSAGE.RETRY);
  } catch (e) {
    console.log(e.message);
    return exchange();
  }
};

export { exchange };
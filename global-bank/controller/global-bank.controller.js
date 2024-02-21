import { ACTION_MAP } from "../const/action-map.const.js";
import { promiseReadLine } from "../../common/utils/promise-readline.utils.js";
import { MESSAGE } from "../const/message.const";
async function selectProgram() {
  const answer = await promiseReadLine(MESSAGE.SELECTPROGRAM);

  for (const action of Object.values(ACTION_MAP)) {
    if (action.keys.includes(answer)) {
      await action.action();
      return;
    }
  }

  console.log(MESSAGE.RETRY);
  await selectProgram();
}

export { selectProgram };

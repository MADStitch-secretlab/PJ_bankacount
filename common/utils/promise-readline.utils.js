import readline from "readline";
import { MESSAGE } from "../../global-bank/const/message.const.js";
import { isNumber } from "../../global-bank/helper/check-is-it-num.helper.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const promiseReadLine = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, function (answer) {
      resolve(answer);
    });
  });
};

const promiseReadLineWithValidationFns = ({
  question,
  validationFnList,
  canExit = true,
  exitMessage = "프로그램을 종료합니다.",
  transformFn,
  message = MESSAGE.RETRY,
}) => {
  if (!validationFnList || validationFnList.length === 0) {
    throw new Error("MESSAGE.VALIDATION_FN_LIST_IS_REQUIRED");
  }

  return new Promise(async (resolve, reject) => {
    let answer = await promiseReadLine(question);
    let isValid = false;

    while (!isValid) {
      if (canExit && answer === "종료") {
        console.log(exitMessage);
        process.exit();
      }
      for (let i = 0; i < validationFnList.length; i++) {
        if (validationFnList[i](answer)) {
          isValid = true;
          break;
        }
      }
      if (!isValid) {
        console.log(message);
        answer = await promiseReadLine(question);
      }
    }
    if (transformFn) {
      answer = transformFn(answer);
    }
    resolve(answer);
  });
};

export { promiseReadLine, promiseReadLineWithValidationFns };

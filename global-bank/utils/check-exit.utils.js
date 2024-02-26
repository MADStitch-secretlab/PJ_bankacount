import { MESSAGE } from "../const/message.const.js";

export const checkExit = (input) => {
  if (input === "종료") {
    console.log(MESSAGE.EXIT);
    process.exit();
  }
};

const checkKey = ({ input, key, message, fn }) => {
  if (input === key) {
    if (message) {
      console.log(message);
    }
    fn();
  }
};

export const checkExitAndRetry = (input, fn) => {
  checkKey({
    input,
    key: "종료",
    message: MESSAGE.EXIT,
    fn: process.exit,
  });
};

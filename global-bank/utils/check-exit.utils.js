import {MESSAGE} from "../const/message.const.js";

export const checkExit = (input) => {
    if (input === "종료") {
        console.log(MESSAGE.EXIT);
        process.exit();
    }
}
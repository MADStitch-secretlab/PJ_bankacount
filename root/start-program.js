import {selectProgram} from "./domain/select-program.js";
import {promiseReadLine} from "./domain/action/utils/promise-readline.js";

async function startProgram () {
    const answer = await promiseReadLine("명령어를 입력하세요 \n 1. 외환 거래 은행 \n : ")
        if (answer !== "외환 거래 은행")
        {
            console.log("다시 입력하세요.");
            await startProgram();

            }
        await selectProgram();
    }


export {startProgram};
import {deposit} from "../service/deposit.service.js";
import {withdraw} from "../service/withdraw.service.js";
import {inquiry} from "../service/inquiry.service.js";
import {exchange} from "../service/exchage.service.js";

const ACTION_MAP = {
    "DEPOSIT": {
        action : deposit,
        keys : ["1", "입금", "deposit"]
    },
    "WITHDRAW": {
        action : withdraw,
        keys : ["2", "출금", "withdraw"]
    },
    "INQUIRY": {
        action : inquiry,
        keys : ["3", "잔고 확인", "inquiry"]
    },
    "EXCHANGE":{
        action : exchange,
        keys : ["4", "환전", "exchange"]
    },
    "EXIT": {
        action : () => {
            console.log("종료합니다.");
            process.exit();
        },
        keys: ["5", "종료", "exit"]
    }
}
export {ACTION_MAP};
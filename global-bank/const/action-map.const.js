import {deposit} from "../service/deposit.service.js";
import {withdraw} from "../service/withdraw.service.js";
import {inquiry} from "../service/inquiry.service.js";
import {exchange} from "../service/exchange.service.js";
import {exit} from "../service/exit.service.js";
import {exchangeCurrency} from "../service/exchange.service.js";
import {showExchangeRate} from "../service/exchange.service.js";
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
        action : exit,
        keys: ["5", "종료", "exit"],
    }

}

const EXCHANGE_ACTION_MAP = {
    "SHOW_EXCHANGE_RATE": {
        action: showExchangeRate,
        keys: ["1", "환율 확인", "show-exchange-rate" , "다른 환율 확인"]
    },
    "EXCHANGE": {
        action : exchangeCurrency,
        keys : ["2", "환전", "exchange currency"]
    },
    "EXIT": {
        action: exit,
        keys: ["3", "종료", "exit"],
    }


}
export {ACTION_MAP , EXCHANGE_ACTION_MAP};
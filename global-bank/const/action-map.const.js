import { deposit } from "../service/deposit.service.js";
import { withdraw } from "../service/withdraw.service.js";
import { showAccountByAccountNumber } from "../service/inquiry.service.js";
import {activateExchangeController } from "../controller/exchange-controller.controller.js";
import { exit } from "../service/exit.service.js";
import { exchangeCurrency } from "../service/exchange-currency.service.js";
import { showExchangeRate } from "../service/show-exchange-rate.service.js";
const ACTION_MAP = {
  DEPOSIT: {
    action: deposit,
    keys: ["1", "입금", "deposit"],
  },
  WITHDRAW: {
    action: withdraw,
    keys: ["2", "출금", "withdraw"],
  },
  INQUIRY: {
    action: showAccountByAccountNumber,
    keys: ["3", "잔고 확인", "inquiry"],
  },
  EXCHANGE: {
    action: activateExchangeController,
    keys: ["4", "환전", "exchange"],
    subActionMap: {

      SHOW_EXCHANGE_RATE: {
        action: showExchangeRate,
        keys: ["1", "환율 확인", "show-exchange-rate", "다른 환율 확인"],
      },
      EXCHANGE: {
        action: exchangeCurrency,
        keys: ["2", "환전", "exchange currency"],
      },
      EXIT: {
        action: exit,
        keys: ["3", "종료", "exit"],
      },
    },
  },

  EXIT: {
    action: exit,
    keys: ["5", "종료", "exit"],
  },
};


export { ACTION_MAP };

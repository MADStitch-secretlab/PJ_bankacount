import { MESSAGE } from "../const/message.const.js";

const exchangeComparing = async (fromMoney, amount) => {
  try {
    if (fromMoney < amount * 1.1) throw new Error(MESSAGE.EXCHANGE.NOT_ENOUGH);

    const result = fromMoney - amount * 1.1;
    return fromMoney - amount * 1.1;
  } catch (e) {
    console.log(e.message);
    throw new Error();
  }
};
export {exchangeComparing};
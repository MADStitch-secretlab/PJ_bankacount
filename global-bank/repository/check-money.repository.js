import { connectSql } from "../../db/service/connect-mysql.utils.js";

const checkallMoney = async () => {
  const connection = await connectSql();
  try {
    const selectQuery = `SELECT * from acount`;
    const [rows] = await connection.query(selectQuery);
    const account = rows[0].account;
    const KRWMoney = rows[0].KRW;
    const USDMoney = rows[0].USD;
    const JPYMoney = rows[0].JPY;
    const CNYMoney = rows[0].CNY;
    return {
      account: account,
      KRWMoney: KRWMoney,
      USDMoney: USDMoney,
      JPYMoney: JPYMoney,
      CNYMoney: CNYMoney,
    };
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await connection.end();
  }
};

const checkCurrency = async (currency) => {
  try {
    const connection = await connectSql();
    const selectQuery = `SELECT ${currency} from acount`;
    const [rows] = await connection.query(selectQuery);
    return Number(rows[0][currency] ?? 0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { checkallMoney, checkCurrency };

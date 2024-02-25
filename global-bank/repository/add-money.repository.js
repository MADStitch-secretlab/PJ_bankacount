import { connectSql } from "../../db/service/connect-mysql.utils.js";
import { checkallMoney } from "./check-money.repository.js";

export const addMoney = async function (currency, numAnswer) {
  const connection = await connectSql();
  try {
    const updateQuery = `UPDATE acount SET ${currency} = ${currency} + ? WHERE user = ?`;
    const [results] = await connection.query(updateQuery, [numAnswer, 1]);
    return results;
  } catch (error) {
    console.error(error);
    process.exit(1); // 오류가 발생했기 때문에, 비정상 종료를 나타내는 1로 종료합니다.
  } finally {
    await connection.end();
  }
};

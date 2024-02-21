import { connectSql } from "../../db/service/connect-mysql.utils.js";
import { checkallMoney } from "./check-money.repository.js";

export const addMoney = async function (currency, numAnswer) {
  const connection = await connectSql();
  try {
    const updateQuery = `UPDATE acount SET ${currency} = ${currency} + ? WHERE user = ?`;

    // query 실행. 비동기이므로 await를 사용하며, 결과를 직접 받습니다.
    const [results] = await connection.query(updateQuery, [numAnswer, 1]);
    return results;
  } catch (error) {
    console.error(error);
    // 오류 발생 시에도 연결을 안전하게 종료합니다.
    // connection.end(); // 에러 핸들링 시 연결 객체가 접근 가능한지 확인 필요
    process.exit(1); // 오류가 발생했기 때문에, 비정상 종료를 나타내는 1로 종료합니다.
  } finally {
    await connection.end();
  }
};

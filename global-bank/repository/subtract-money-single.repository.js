import { connectSql } from "../../db/service/connect-mysql.utils.js";

const subtractMoneySingle = async (currency, numAnswer) => {
  const connection = await connectSql();
  try {
    const updateQuery = `UPDATE acount SET ${currency} = ${currency} - ? WHERE user = ?`;
    return await connection.query(updateQuery, [numAnswer, 1]);
  } catch (error) {
    console.error("오류 발생:", error);
    process.exit(1);
  } finally {
    await connection.end();
  }
};
export { subtractMoneySingle };

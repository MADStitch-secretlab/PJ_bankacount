import {connectMySql} from "../../db/service/connect-mysql.utils.js";


const updateAccountMulti = async (updates) => {
// ex) updates = {KRW: 1000, USD: 1000, JPY: 1000, CNY: 1000}
    const connection = await connectMySql();
  try {
    for (const [currency, amount] of Object.entries(updates)) {
      const updateQuery = `UPDATE account SET ${currency} = ? WHERE user = ?`;
      await connection.query(updateQuery, [amount, 1]);
    }
  }catch (e) {
    console.error("오류 발생:", e);
    process.exit(1);

  }finally {
    await connection.end();
  }
}
export {updateAccountMulti};
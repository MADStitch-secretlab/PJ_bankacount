import  {connectSql} from "../utils/connect-sql.js";
import {checkallMoney} from "./check-money.js";
const subtractMoneySingle = async (currency, numAnswer) => {
    try {
        const connection = await connectSql();
        const updateQuery = `UPDATE acount SET ${currency} = ${currency} - ? WHERE user = ?`;

        const results = await connection.query(updateQuery, [numAnswer, 1]);
        console.log('출금 완료');
        await checkallMoney();
        process.exit();
    }catch (error) {
        console.error('오류 발생:', error);
        process.exit(1);
    }
}
export {subtractMoneySingle};
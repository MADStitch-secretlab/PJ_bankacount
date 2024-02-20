import {connectSql} from "../utils/connect-sql.js";
import {checkallMoney} from "./check-money.js";

const checkAccount = async (account) => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * FROM acount`;
        const [rows] = await connection.query(selectQuery);
        const accountData = rows[0].account;


        if (account !== accountData) {
            console.log("계좌가 존재하지 않습니다.");
            process.exit(1);
        }
        console.log(`${JSON.stringify(account)} 계좌 확인되었습니다.`);
        await checkallMoney()


    } catch (error) {
        console.error(error);
        process.exit(1);
    }



};
export {checkAccount};
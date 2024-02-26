import {connectMySql} from "../../db/service/connect-mysql.utils.js";


const updateAccount = async (currency, amount) => {
    const connection = await connectMySql();
    try {
        const updateQuery = `UPDATE acount SET ${currency} = ?   WHERE user = ?`;
        return await connection.query(updateQuery, [amount, 1]);

    } catch (e) {
        console.error("오류 발생:", e);
        process.exit(1);

    } finally {
        await connection.end();

    }
}

export {updateAccount};
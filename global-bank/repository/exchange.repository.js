import {connectSql} from "../../db/service/connect-mysql.utils.js";

const exchangeAddRepository = async (currency, amount) => {
    const connection = await connectSql();
    try {
        const updateQuery = `UPDATE acount SET ${currency} = ${currency} + ? WHERE user = ?`;
        return await connection.query(updateQuery, [amount, 1]);


    } catch (e) {
        console.error("오류 발생:", e);
        process.exit(1);

    } finally {
        await connection.end();


    }
}
const exchangeSubtractRepository = async (currency, amount) => {
    const connection = await connectSql();
    try {
        const updateQuery = `UPDATE acount SET ${currency} = ${currency} - ? WHERE user = ?`;
        return await connection.query(updateQuery, [amount, 1]);

    } catch (e) {
        console.error("오류 발생:", e);
        process.exit(1);

    }finally {
        await connection.end();
    }
}
export {exchangeAddRepository, exchangeSubtractRepository};
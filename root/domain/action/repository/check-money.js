import {connectSql} from "../utils/connect-sql.js";
const checkallMoney = async () => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * from acount`;
        const [rows] = await connection.query(selectQuery);
        const account = rows[0].account;
        const KRWMoney = rows[0].KRW;
        const USDMoney = rows[0].USD;
        const JPYMoney = rows[0].JPY;
        const CNYMoney = rows[0].CNY;
        console.log(`${account}의 잔고: KRW: ${KRWMoney}, USD: ${USDMoney}, JPY: ${JPYMoney}, CNY: ${CNYMoney}`);
        process.exit();

    }catch (error) {
        console.error(error);
        process.exit(1);

    }

}

const checkKrwMoney = async () => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * from acount`;
        const rows = await connection.query(selectQuery);
        return rows[0].KRW;

    }catch (error) {
        console.error(error);
        process.exit(1);

    }


}

const checkUsdMoney = async () => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * from acount`;
        const rows = await connection.query(selectQuery);
        return rows[0].USD;

    }catch (error) {
        console.error(error);
        process.exit(1);

    }
}

const checkJpyMoney = async () => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * from acount`;
        const rows = await connection.query(selectQuery);
        return rows[0].JPY;

    }catch (error) {
        console.error(error);
        process.exit(1);

    }
}

const checkCnyMoney = async () => {
    try {
        const connection = await connectSql();
        const selectQuery = `SELECT * from acount`;
        const rows = await connection.query(selectQuery);
        return rows[0].CNY;

    }catch (error) {
        console.error(error);
        process.exit(1);

    }
}

export {checkallMoney, checkKrwMoney, checkUsdMoney, checkJpyMoney, checkCnyMoney};
import mysql from "mysql2/promise";

async function connectMySql() {
    // Connection 객체를 반환합니다.
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ehdgur0209**',
        database: 'acount'
    });
}
export {connectMySql};
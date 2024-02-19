import mysql from 'mysql2/promise';

async function createConnection() {
    // Connection 객체를 반환합니다.
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ehdgur0209**',
        database: 'acount'
    });
}

export const addAccount = async function (currency, numAnswer) {
    try {
        const connection = await createConnection(); // Connection을 생성합니다.
        const updateQuery = `UPDATE acount SET ${currency} = ${currency} + ? WHERE user = ?`;

        // query 실행. 비동기이므로 await를 사용하며, 결과를 직접 받습니다.
        const results = await connection.query(updateQuery, [numAnswer, 1]);

        console.log('입금 완료', results);
        process.exit();

        // 사용 후 연결을 종료합니다. process.exit()를 사용하는 대신 연결을 종료해 주세요.
        await connection.end();
    } catch (error) {
        console.error('오류 발생:', error);
        // 오류 발생 시에도 연결을 안전하게 종료합니다.
        // connection.end(); // 에러 핸들링 시 연결 객체가 접근 가능한지 확인 필요
        process.exit(1); // 오류가 발생했기 때문에, 비정상 종료를 나타내는 1로 종료합니다.
    }
};



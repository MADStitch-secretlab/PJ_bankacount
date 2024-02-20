


async function getKRW() {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ehdgur0209**',
        database : 'acount'
    });

    try {
        const [results, fields] = await connection.query('SELECT * FROM acount');
        if (results.length > 0) {
            return results[0].KRW;

        }
        return null; // 결과가 없는 경우
    } catch (error) {
        console.error(error);
        return null; // 오류 처리
    } finally {
        await connection.end();
    }
}
async function getUSD() {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ehdgur0209**',
        database : 'acount'
    });

    try {
        const [results, fields] = await connection.query('SELECT * FROM acount');
        if (results.length > 0) {
            return results[0].USD;

        }
        return null; // 결과가 없는 경우
    } catch (error) {
        console.error(error);
        return null; // 오류 처리
    } finally {
        await connection.end();
    }
}

async function getJPY() {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ehdgur0209**',
        database : 'acount'
    });

    try {
        const [results, fields] = await connection.query('SELECT * FROM acount');
        if (results.length > 0) {
            return results[0].JPY;

        }
        return null; // 결과가 없는 경우
    } catch (error) {
        console.error(error);
        return null; // 오류 처리
    } finally {
        await connection.end();
    }
}

async function getCNY() {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ehdgur0209**',
        database : 'acount'
    });

    try {
        const [results, fields] = await connection.query('SELECT * FROM acount');
        if (results.length > 0) {
            return results[0].CNY;

        }
        return null; // 결과가 없는 경우
    } catch (error) {
        console.error(error);
        return null; // 오류 처리
    } finally {
        await connection.end();
    }
}
async function useKRW() {
    const KRW = await getKRW();
}
const krw = await getKRW();
console.log(krw);









// connection.connect();
// const calculationResult = 1 + 1; // 계산 결과
//
// // JPY 값을 업데이트하는 쿼리 실행
// var updateQuery = 'UPDATE acount SET JPY = ? WHERE user = ?';
// connection.query(updateQuery, [calculationResult, 1], function(error, results) {
//     if (error) throw error;
//     console.log('JPY 값 업데이트 완료');
//
//    // 업데이트된 값을 조회하는 쿼리 실행
//
// });
//
// const showacount = () => {
//     connection.query('SELECT * from acount', function (error, results, fields) {
//         if (error) throw error;
//
//
//         if (results.length > 0) {
//             const user = results[0].user;
//             const KRW = results[0].KRW;
//             const USD = results[0].USD;
//             const JPY = results[0].JPY; // 오타가 있는 것 같아 JPY로 가정합니다.
//             const CNY = results[0].CNY;
//             console.log(`user: ${user}, KRW: ${KRW}, USD: ${USD}, JPY: ${JPY}, CNY: ${CNY}`);
//         } else {
//             console.log("결과가 없습니다.");
//         }
//     });
//     connection.end();
//
// }
// connection.query('SELECT * from acount', function (error, results, fields) {
//     if (error) throw error;
//
//
//     if (results.length > 0) {
//         const user = results[0].user;
//         const KRW = results[0].KRW;
//         const USD = results[0].USD;
//         const JPY = results[0].JPY; // 오타가 있는 것 같아 JPY로 가정합니다.
//         const CNY = results[0].CNY;
//         console.log(`user: ${user}, KRW: ${KRW}, USD: ${USD}, JPY: ${JPY}, CNY: ${CNY}`);
//     } else {
//         console.log("결과가 없습니다.");
//     }
// });
//

// connection.connect();
//
// // SQL 쿼리를 실행하고 결과를 변수에 저장합니다.
// connection.query('SELECT * from acount', (err, results, fields) => {
//     if (err) throw err;
//
//     // 조회된 데이터를 변수에 저장합니다.
//     const data = results;
//
//     // 결과를 출력합니다. 예시로 첫 번째 행의 데이터를 콘솔에 출력해 봅니다.
//     console.log(data);
//
//     // 다 사용한 연결은 종료합니다.
//     connection.end();
// });
// console.log(data);
// //
// connection.end();
// 안녕하십니까 행님ㅋㅋㅋㅋㅋㅋ MYSQL의 지옥에서 빠져나오지 못하
// ㅋㅋㅋㅋ
// 설마 SQL 도입하려나 하고있었는데 역시나군요
// 이왕 하는거 개빡세게 해봐야죠
// 그게 무조건 좋긴 한데 기간이 하루인건 아시죠?ㅋㅋㅋㅋ
//     행님 오늘 잠을 안자서라도 해감요
// 뭐든 감당할수 있다면 저는 좋습니다
// 해보고 안되면 갈아타야죠 근데 이게 저장공간은 필요해서 뭐로 하지 고민하다가 SQL로 갔슴다
// SQL 아니더라도 저장할 수 있는 방법은 많아요 뭐 근데 SQl 배운김에 해보는것도 좋긴 하죠
// 문제는 언어 연습해야하는데 포지션이 역전되는 느낌이 들면 안되니 균형은 잘 맞추시고...
// 포지션 역전이라면 어떤거죠...?
//     아니 포지션 역전이라기 보다는 그니까 비중이 언어 공부를 최대로 가져가야하는데
// SQL 도입 해보겠다고 SQL로 머리싸매느라 구현에 시간을 못쏟으면 안되니까요
// 밸런싱 맞추겠습니다 근데이거 그냥 대화도 유추해주네요?
//     이거 그냥 다 해줘요 주석도 대충 쓰면 자동완성으로 주석도 달아주고 ㅋㅋ
// 훌륭하네요
// connection.connect();
// var updateQuery = 'UPDATE acount SET ${country} = ? WHERE user = ?';
// connection.query(updateQuery, [answer, 1], function(error, results) {
//     if (error) throw error;
//     console.log('JPY 값 업데이트 완료')});

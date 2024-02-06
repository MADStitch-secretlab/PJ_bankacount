const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const start = () => {
    rl.question("명령어를 입력하세요: ",function (answer) {
        if (answer === "실행") {
            console.log("실행합니다.");
            section();

        } else {
            console.log("다시 입력하세요");
            start();
        }
    })

};
start();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ehdgur0209**',
    database : 'acount'
});
connection.connect();
const KRW = connection.query('SELECT * from acount', function (error, results, fields) {
    results[0].KRW;
})
console.log(KRW);
connection.query('SELECT * from acount', function (error, results, fields) {

    const user = results[0].user;
    const KRW = results[0].KRW;
    const USD = results[0].USD;
    const JPY = results[0].JPY; // 오타가 있는 것 같아 JPY로 가정합니다.
    const CNY = results[0].CNY;
})
const section =() => {

    rl.question("실행할 항목을 입력하세요 /n 1. 입금 /n 2. 출금 /n 3. 잔고 확인 /n 4. 종료 /n: ", function (answer) {
        if (answer === "1" || answer === "입금") {
            input();

        } else if (answer === "2" || answer === "출금") {
            output();
        } else if (answer === "3" || answer === "잔고 확인") {
            showacount();
        } else if (answer === "4" || answer === "종료") {
            console.log("종료합니다.");
            process.exit();
        } else {
            console.log("다시 입력하세요");
            section();
        }





    });

}
 const input = () => {

     rl.question("입금할 통화을 입력하세요: ", function (answer) {
         if (answer === "KRW" || answer === "USD" || answer === "JPY" || answer === "CNY") {
             var country = answer;
             rl.question("입금할 금액을 입력하세요: ", function (answer) {
                 const answer1 = parseInt(answer, 10)
                 if (answer === "종료") {
                     console.log("종료합니다.");
                     rl.close();
                 } else if (typeof answer1 === "number") {
                     var updateQuery = `UPDATE acount SET ${country} = ? WHERE user = ?`;
                     connection.query(updateQuery, [answer1, 1], function (error, results) {
                         if (error) throw error;
                         console.log('입금 완료');
                         process.exit()

                     });
                 } else {
                     console.log("다시 입력하세요");
                     input();
                 }

             })
         } else {
             console.log("다시 입력하세요");
                input();

         }


     });
 }

const output = () => {

    rl.question("출금할 통화을 입력하세요: ", function (answer) {
        if (answer === "KRW" || answer === "USD" || answer === "JPY" || answer === "CNY") {
            rl.question("출금할 금액을 입력하세요: ", function (answer) {
                const answer1 = parseInt(answer, 10)



                if (answer === "종료") {
                    console.log("종료합니다.");
                    rl.close();
                } else if (typeof answer1 === "number" && answer1 <= KRW || answer1 <= USD || answer1 <= JPY || answer1 <= CNY) {
                    var updateQuery = `UPDATE acount SET ${country} = ? WHERE user = ?`;
                    connection.query(updateQuery, [-answer, 1], function (error, results) {
                        if (error) throw error;
                        console.log('출금 완료');

                    });

                } else if (typeof answer1 === "number" && answer1 > KRW || answer1 > USD || answer1 > JPY || answer1 > CNY) {

                    console.log("잔고가 부족합니다.");
                    showacount();
                    // withanotheracount()
                }else {
                    console.log("다시 입력하세요");
                    output();
                }


            })
        }
    })
}

const showacount = () => {

    connection.query('SELECT * from acount', function (error, results, fields) {
        if (error) throw error;



        if (results.length > 0) {
            const user = results[0].user;
            const KRW = results[0].KRW;
            const USD = results[0].USD;
            const JPY = results[0].JPY;
            const CNY = results[0].CNY;
            console.log(`user: ${user}, KRW: ${KRW}, USD: ${USD}, JPY: ${JPY}, CNY: ${CNY}`);
            process.exit();
        } else {
            console.log("결과가 없습니다.");
        }
    });
    connection.end();


}

// const withanotheracount = () => {
//     rl.question("추가 출금할 통화를 선택하세요. 다른 통화 선택 시 10%의 수수료가 붙습니다: ", function (answer) {
//         connection.query('SELECT * from acount', function (error, results, fields) {
//             const KRW = results[0].KRW;
//             const USD = results[0].USD;
//             const JPY = results[0].JPY;
//             const CNY = results[0].CNY;
//         })
//     });
//
// }
//
//
//
//
//
//

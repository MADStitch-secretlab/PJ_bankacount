import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const promiseReadLine = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
}
export {promiseReadLine};
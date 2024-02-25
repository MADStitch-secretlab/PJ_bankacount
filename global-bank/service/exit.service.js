import { MESSAGE } from '../const/message.const.js';
const exit = async () => {
    console.log(MESSAGE.EXIT);
    process.exit();
}
export { exit };
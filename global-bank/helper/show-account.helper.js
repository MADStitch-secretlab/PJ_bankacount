import { checkallMoney } from '../repository/check-money.repository.js';
const showAccount = async () => {
    const money = await checkallMoney();
    console.log(
        `${money.account}의 잔고: KRW: ${money.KRWMoney}, USD: ${money.USDMoney}, JPY: ${money.JPYMoney}, CNY: ${money.CNYMoney}`,
    );
    process.exit();
};
export { showAccount };

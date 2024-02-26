import { connectMySql } from "../../db/service/connect-mysql.utils.js";

const findAccount = async (account) => {
  try {
    const connection = await connectMySql();
    const selectQuery = `SELECT * FROM acount`;
    const [rows] = await connection.query(selectQuery);
    return rows[0].account;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export {findAccount};

// get | find, update, create, delete, findAll, ...
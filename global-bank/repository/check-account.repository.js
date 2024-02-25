import { connectSql } from "../../db/service/connect-mysql.utils.js";

const checkAccount = async (account) => {
  try {
    const connection = await connectSql();
    const selectQuery = `SELECT * FROM acount`;
    const [rows] = await connection.query(selectQuery);
    return rows[0].account;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export {checkAccount};

// get | find, update, create, delete, findAll, ...
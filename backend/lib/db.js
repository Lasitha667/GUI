
import mysql from "mysql2/promise";

let connection;

export const connectToDatabase = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: 'localhost',
        // user: process.env.DB_USER,
        user: 'root',
        email:'',
        password: '',
        database: 'login',
      });
    }
    return connection;
  } catch (err) {
    console.log(err);
  }
};
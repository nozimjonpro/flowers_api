const dotenv = require("dotenv");

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const pgConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
};

module.exports = {
    SECRET, pgConfig
}
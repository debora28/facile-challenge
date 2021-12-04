require("dotenv").config(".env");

module.exports = {
  development: {
    username: process.env.USER || "postgres",
    password: process.env.PASSWORD || "postgres",
    database: process.env.DATABASE || "teste",
    host: process.env.HOST || "127.0.0.1",
    port: 5432,
    dialect: process.env.DIALECT || "postgres",
  },
  test: {
    username: process.env.USER || "postgres",
    password: process.env.PASSWORD || "postgres",
    database: process.env.DATABASE || "teste",
    host: process.env.HOST || "127.0.0.1",
    port: 5432,
    dialect: process.env.DIALECT || "postgres",
  },
  production: {
    username: process.env.USER || "postgres",
    password: process.env.PASSWORD || "postgres",
    database: process.env.DATABASE || "teste",
    host: process.env.HOST || "localhost",
    port: 5432,
    dialect: process.env.DIALECT || "postgres",
  },
};

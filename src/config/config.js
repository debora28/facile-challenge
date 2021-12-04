module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "teste",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "teste",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "teste",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
};
// const { Sequelize } = require("sequelize");

// const config = new Sequelize("teste", "postgres", "postgres", {
//   host: "localhost",
//   dialect: "postgres",
// });

// export default config;

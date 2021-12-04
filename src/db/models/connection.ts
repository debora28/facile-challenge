const { Sequelize } = require("sequelize");
const config = require("../../config/config");
require('dotenv').config( '.env' );

let sequelize = null;

// Fazer a conexão
sequelize = new Sequelize(process.env.DATABASE || "teste", process.env.USER || "postgres", process.env.PASSWORD || "postgres", {
  host: process.env.HOST || "localhost",
  dialect: process.env.DIALECT || "postgres",
  logging: false,
  timezone: "-03:00",
});

// Verificar a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o PostgreSQL estabelecida");
  })
  .catch((error) => {
    console.log("Conexão com o PostgreSQL falhou: ", error);
  });

export default sequelize;

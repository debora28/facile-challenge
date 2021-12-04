const { Sequelize } = require("sequelize");
const config = require("../../config/config");

let sequelize = null;

// Fazer a conexão
sequelize = new Sequelize("teste", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
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

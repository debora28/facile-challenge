// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("postgres://postgres@localhost:5432/teste", {
//   dialect: "postgres",
// });

// export default sequelize;

const { Sequelize } = require('sequelize');

const config = require('../../config/config');

let sequelize = null;

if (process.env.DEV_MODE) {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
} else {
  sequelize = new Sequelize('teste', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    // dialectOptions: {
    //   options: {
    //     validateBulkLoadParameters: true,
    //   },
    //   // instanceName: 'SQLEXPRESS',
    // },
    logging: false,
    timezone: '-03:00',
  });
}

// Captar possível erro na conexão.
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o PostgreSQL estabelecida');
  })
  .catch((error) => {
    console.log('Conexão com o PostgreSQL falhou: ', error);
  });


export default sequelize;
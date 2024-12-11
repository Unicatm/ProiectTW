const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("proiecttw", "ASUS", "parola123", {
  host: "127.0.0.1",
  dialect: "mariadb",
  logging: false, //opreste acele log-uri de tip sql
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log("Conexiunea cu baza de date a fost realizată cu succes!");
  })
  .catch((err) => {
    console.error("Eroare la conectarea cu baza de date:", err);
  });

module.exports = sequelize;

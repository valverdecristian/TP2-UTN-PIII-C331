const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('biblioteca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

module.exports = { sequelize };
